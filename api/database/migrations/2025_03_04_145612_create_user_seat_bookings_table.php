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
        Schema::create('user_seat_bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_booking_id')->constrained('user_bookings');
            $table->string('column');
            $table->string('row');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_seat_bookings');
    }
};
