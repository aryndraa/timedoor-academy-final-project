<?php

namespace App\Http\Controllers\Api\V1\User\Auth;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\User\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends BaseController
{
    public function register(RegisterRequest $request): JsonResponse {

        $user    = User::query()->create($request->all());
        $token   = auth('user')->tokenById($user->id);
        $success = $this->respondWithToken($token);

        return $this->sendResponse($success, 'User Register successfully.');
    }

    protected function respondWithToken($token): array
    {
        return [
            'access_token' => $token,
            'token_type' => 'bearer',
        ];
    }
}
