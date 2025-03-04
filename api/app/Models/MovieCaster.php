<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MovieCaster extends Model
{
    protected $fillable = [
        'name'
    ];

    public function movie(): BelongsTo {
        return $this->belongsTo(Movie::class);
    }
}
