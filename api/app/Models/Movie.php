<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Movie extends Model
{
    protected $fillable = [
        'title',
        'genre',
        'age_restriction',
        'duration',
        'language',
        'synopsis',
        'author',
        'trailer_url',
        'start_date',
        'end_date',
    ];

    public function casters(): HasMany {
        return $this->hasMany(MovieCaster::class);
    }

    public function prices(): HasMany {
        return $this->hasMany(MoviePrice::class);
    }

    public function bookings(): HasMany {
        return $this->hasMany(UserBooking::class);
    }

    public function cover():MorphOne {
        return $this->morphOne(File::class, 'related');
    }
}
