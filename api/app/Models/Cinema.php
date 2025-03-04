<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cinema extends Model
{
    protected $fillable = [
        'name',
        'address',
        'opening_time',
        'closing_time',
    ];
}
