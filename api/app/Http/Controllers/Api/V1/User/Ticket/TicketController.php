<?php

namespace App\Http\Controllers\Api\V1\User\Ticket;

use App\Http\Controllers\Controller;
use App\Models\UserBooking;

class TicketController extends Controller
{
    public function index() {
        $userId = auth()->id();

        $myTickets = UserBooking::query()
            ->where('user_id', $userId)
            ->with(['movie', 'cinemaStudio', 'seats', 'code'])
            ->get();

        return response()->json($myTickets);
    }
}
