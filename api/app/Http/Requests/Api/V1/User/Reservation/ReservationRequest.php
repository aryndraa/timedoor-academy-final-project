<?php

namespace App\Http\Requests\Api\V1\User\Reservation;

use Illuminate\Foundation\Http\FormRequest;

class ReservationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "cinema_studio_id" => ['required', 'integer', 'exists:cinema_studios,id'],
            "date_time"        => ['required', 'date', 'date_format:Y-m-d H:i:s'],
            "total_seats"      => ['required', 'integer', 'min:1'],
            "voucher"          => ['string', 'min:1'],
            "discount"         => ['integer', 'min:1'],
            "payment_method"   => ['required', 'string'],
            'seats'            => ['required','array'],
            'seats.*.row'      => ['required', 'string'],
            'seats.*.column'   => ['required', 'integer', 'min:1'],

        ];
    }
}
