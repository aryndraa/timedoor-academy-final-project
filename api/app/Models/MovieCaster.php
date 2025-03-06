<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class MovieCaster extends Model
{
    protected $fillable = [
        'name',
        'movie_id'
    ];

    public function movie(): BelongsTo {
        return $this->belongsTo(Movie::class);
    }

    public function picture(): MorphOne {
        return $this->morphOne(File::class, 'related');
    }
}
