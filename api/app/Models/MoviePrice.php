<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MoviePrice extends Model
{
    protected $fillable = [
        'price',
        'movie_id',
        'cinema_studio_id'
    ];

    public function movie(): BelongsTo {
        return $this->belongsTo(Movie::class);
    }

    public function cinemaStudio(): BelongsTo {
        return $this->belongsTo(CinemaStudio::class);
    }

    public function movieSchedules(): HasMany {
        return $this->hasMany(MovieSchedule::class);
    }
}
