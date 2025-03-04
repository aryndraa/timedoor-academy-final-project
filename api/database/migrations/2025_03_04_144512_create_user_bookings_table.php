<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('cinema_studio_id')->constrained('cinema_studios');
            $table->foreignId('movie_id')->constrained('movies');
            $table->dateTime('date_time');
            $table->integer('total_seats');
            $table->integer('subtotal');
            $table->string('voucher')->nullable();
            $table->integer('discount')->nullable();
            $table->integer('total');
            $table->string('payment_method');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_bookings');
    }
};
