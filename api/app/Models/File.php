<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class File extends Model
{
    protected $fillable = [
        'file_name',
        'file_path',
        'file_type',
    ];

    public function related(): MorphTo {
        return $this->morphTo();
    }
}
