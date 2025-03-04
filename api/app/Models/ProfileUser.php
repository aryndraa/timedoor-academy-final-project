<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProfileUser extends Model
{
    protected $fillable = [
        'name',
        'tier',
        'points',
        'total_payment'
    ];

    public function user():BelongsTo {
        return $this->belongsTo(User::class);
    }


}
