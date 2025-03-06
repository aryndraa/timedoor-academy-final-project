<?php

namespace App\Http\Controllers\Api\V1\Admin\MovieManagement;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;

class MovieManagementController extends Controller
{
    public function index(Request $request)
    {

        $movies = Movie::all();


    }
}
