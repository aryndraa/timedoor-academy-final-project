<?php

namespace App\Http\Controllers\Api\V1\Admin\Auth;

use App\Http\Controllers\BaseController;
use App\Http\Requests\Api\V1\Admin\Auth\LoginRequest;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class AuthController extends BaseController
{

    public function login(LoginRequest $request): JsonResponse {
        $admin = Admin::query()->where('email', $request->email)->first();

        if (!$admin) {
            return $this->sendError('Unauthorized.', ['error' => 'Unauthorized']);
        }

        $token = auth('admin')->tokenById($admin->id);
        $success = $this->respondWithToken($token);

        return $this->sendResponse($success, 'Admin login successfully.');
    }

    public function logout(): JsonResponse
    {
        auth('admin')->logout();

        return $this->sendResponse([], 'Successfully logged out.');
    }

    protected function respondWithToken($token): array
    {
        return [
            'access_token' => $token,
            'token_type' => 'bearer',
        ];
    }
}
