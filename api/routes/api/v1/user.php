<?php

use App\Http\Controllers\Api\V1\User\Auth\AuthController;
use App\Http\Controllers\Api\V1\User\Movie\MovieController;
use App\Http\Controllers\Api\V1\User\Reservation\ReservationController;
use App\Http\Controllers\Api\V1\User\Ticket\TicketController;
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

                Route::middleware(['auth:user'])->group(function () {
                    Route::controller(ReservationController::class)
                        ->prefix('/{movie}')
                        ->name('reservation.')
                        ->group(function () {
                            Route::post('/reservation', 'reservation')->name('reservation');
                        });

                });
            });

        Route::middleware(['auth:user'])->group(function () {
            Route::controller(TicketController::class)
                ->prefix('/tickets/')
                ->name('tickets.')
                ->group(function () {
                    Route::get('/', 'index')->name('index');
                });
        });




    });
