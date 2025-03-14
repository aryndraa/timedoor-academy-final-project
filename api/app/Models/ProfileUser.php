<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class ProfileUser extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'phone',
        'tier',
        'points',
        'total_payment'
    ];

    public function user():BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function avatar():MorphOne {
      return $this->morphOne(File::class, 'related');
    }


}
