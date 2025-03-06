<?php

namespace App\Http\Controllers\Api\V1\User\Movie;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index() {
        $movies = Movie::query()
            ->with(['cover', 'casters', 'casters.picture'])
            ->get();

        return response()->json($movies[0]['casters'][0]);
    }
}
