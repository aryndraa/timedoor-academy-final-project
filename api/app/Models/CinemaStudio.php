<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CinemaStudio extends Model
{
    protected $fillable = [
        'total_seats'
    ];

    public function cinema(): BelongsTo {
        return $this->belongsTo(Cinema::class);
    }

    public function studio(): BelongsTo {
        return $this->belongsTo(Studio::class);
    }

    public function prices(): HasMany {
        return $this->hasMany(MoviePrice::class);
    }

    public function bookings(): HasMany {
        return $this->hasMany(UserBooking::class);
    }
}
