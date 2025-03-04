<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
        'start_date',
        'end_date',
    ];

    public function casters(): HasMany {
        return $this->hasMany(MovieCaster::class);
    }

    public function prices(): HasMany {
        return $this->hasMany(MoviePrice::class);
    }
}
