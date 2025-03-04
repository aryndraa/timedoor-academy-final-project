<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserBooking extends Model
{
    protected $fillable = [
        'date_time',
        'total_seats',
        'subtotal',
        'voucher',
        'discount',
        'total',
        'payment_method',
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function cinemaStudio(): BelongsTo {
        return $this->belongsTo(CinemaStudio::class);
    }

    public function movie(): BelongsTo {
        return $this->belongsTo(Movie::class);
    }
}
