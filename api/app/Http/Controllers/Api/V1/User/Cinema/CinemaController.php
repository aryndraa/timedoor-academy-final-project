<?php

namespace App\Http\Controllers\Api\V1\User\Cinema;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\User\Cinema\IndexResource;
use App\Models\Cinema;
use Illuminate\Http\Request;

class CinemaController extends Controller
{
    public function index() {
        $cinemas = Cinema::query()
            ->with(['picture', 'studio.studio'])
            ->get();

        return IndexResource::collection($cinemas);
    }
}
