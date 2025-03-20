<?php

namespace App\Http\Controllers\Api\V1\User\Profile;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\User\Profile\ProfileIndexResource;
use App\Models\ProfileUser;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index() {
        $profile = ProfileUser::query()
            ->where('user_id', auth()->user()->id)
            ->with(['user'])
            ->first();


        return ProfileIndexResource::make($profile);
    }
}
