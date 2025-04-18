<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserBookingCode extends Model
{
    protected $fillable = [
        'code'
    ];

    public function userBooking(): BelongsTo {
        return $this->belongsTo(UserBooking::class);
    }
}
