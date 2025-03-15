<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MovieSchedule extends Model
{
    protected $fillable = [
        "movie_price_id",
        "time"
    ];


    public function moviePrice() : BelongsTo {
        return $this->belongsTo(MoviePrice::class);
    }
}
