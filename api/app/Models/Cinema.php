<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Cinema extends Model
{
    protected $fillable = [
        'name',
        'address',
        'opening_time',
        'closing_time',
    ];

    public function studio(): HasMany {
        return $this->hasMany(Studio::class);
    }

    public function picture():MorphOne {
        return $this->morphOne(File::class, 'related');
    }
}
