<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserSeatBooking extends Model
{
    protected $fillable = [
        'column',
        'row'
    ];

    public function userBookings() {
        return $this->belongsTo(UserBooking::class);
    }
}
