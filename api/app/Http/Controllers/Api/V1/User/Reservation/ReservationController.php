<?php

namespace App\Http\Controllers\Api\V1\User\Reservation;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\User\Reservation\ReservationRequest;
use App\Models\Movie;
use App\Models\MoviePrice;
use App\Models\UserBooking;
use App\Models\UserBookingCode;
use App\Models\UserSeatBooking;
use App\Models\Voucher;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ReservationController extends Controller
{
    public function reservation(Movie $movie, ReservationRequest $request) {
        $reservation = DB::transaction(function () use ($request, $movie) {
            $moviePrice = MoviePrice::query()
                ->where('movie_id', $movie->id)
                ->where('cinema_studio_id', $request->cinema_studio_id)
                ->pluck('price')
                ->first();


            $subtotal = $request->total_seats * $moviePrice;
            $discount = 0;

            if(request()->voucher) {
                $voucher = Voucher::query()
                    ->where('name', request()->voucher)
                    ->where('expires_at', '>', now())
                    ->first();

                if($voucher) {
                    $discount = $subtotal * ($voucher->discount / 100);
                    $voucher->newQuery()->update([
                        "limit" => $voucher->limit - $request->total_seats,
                    ]);
                }

            }

            $total = $subtotal - $discount;

            $booking = UserBooking::query()->make([
                'date_time' => $request->date_time,
                'total_seats' => $request->total_seats,
                'subtotal' => $subtotal,
                'voucher' => $request->voucher ?? null,
                'discount' => $discount,
                'total' => $total,
                'payment_method' => $request->payment_method,
            ]);

            $booking->user()->associate(auth()->user()->id);
            $booking->cinemaStudio()->associate($request->cinema_studio_id);
            $booking->movie()->associate($movie->id);

            $booking->save();

            foreach ($request->seats as $seat) {
                $bookingSeats = UserSeatBooking::query()->make([
                    'row' => $seat['row'],
                    'column' => $seat['column'],
                ]);

                $bookingSeats->userBooking()->associate($booking->id);

                $bookingSeats->save();
            }

            $bookingCode = UserBookingCode::query()->make([
                "code" => Str::upper(Str::random(4)),
            ]);

            $bookingCode->userBooking()->associate($booking->id);

            $bookingCode->save();

        });
    }

}
