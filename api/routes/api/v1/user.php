<?php

use App\Http\Controllers\Api\V1\User\Auth\AuthController;
use App\Http\Controllers\Api\V1\User\Movie\MovieController;
use Illuminate\Support\Facades\Route;

Route::prefix('user/')
    ->name('user.')
    ->group(function () {
        Route::controller(AuthController::class)
            ->prefix('auth/')
            ->name('auth.')
            ->group(function () {
                Route::post('register', 'register')->name('register');
                Route::post('login', 'login')->name('login');
                Route::delete('logout', 'logout')->name('logout')->middleware('auth:user');
            });

        Route::controller(MovieController::class)
            ->prefix('movies/')
            ->name('movies.')
            ->group(function () {
                Route::get('', 'index')->name('index');
                Route::get('/{movie}', 'show')->name('show');
            });


    });
