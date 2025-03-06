<?php

namespace App\Http\Controllers\Api\V1\User\Movie;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\User\Movie\IndexMovieResource;
use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index() {
        $movies = Movie::query()
            ->with(['cover'])
            ->get();

        return IndexMovieResource::collection($movies);
    }
}
