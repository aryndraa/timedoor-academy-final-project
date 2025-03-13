<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserSeatBooking extends Model
{
    protected $fillable = [
        'column',
        'row'
    ];

    public function userBooking() {
        return $this->belongsTo(UserBooking::class);
    }
}
