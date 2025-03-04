<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MoviePrice extends Model
{
    protected $fillable = [
        'price'
    ];

    public function movie(): BelongsTo {
        return $this->belongsTo(Movie::class);
    }

    public function cinemaStudio(): BelongsTo {
        return $this->belongsTo(CinemaStudio::class);
    }
}
