<?php

namespace App\Http\Controllers\Api\V1\User\Movie;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\User\Movie\IndexMovieResource;
use App\Http\Resources\Api\V1\User\Movie\ShowMovieResource;
use App\Models\Movie;
use App\Models\MovieSchedule;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MovieController extends Controller
{
    public function index() {
        $movies = Movie::query()
            ->with(['cover'])
            ->get();

        return IndexMovieResource::collection($movies);
    }

    public function show(Movie $movie) {
        $movie->load(['cover', 'casters', 'casters.picture']);

        return ShowMovieResource::make($movie);
    }

    public function schedule(Movie $movie) {

        $movieSchedules = MovieSchedule::query()
            ->where('moviePrice.movie')
            ->with([
                'moviePrice',
                'moviePrice.movie',
                'moviePrice.cinemaStudio',
            ])
            ->get();



        return response()->json($movieSchedules);

    }

}
