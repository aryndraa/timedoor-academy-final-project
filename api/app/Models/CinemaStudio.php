<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
}
