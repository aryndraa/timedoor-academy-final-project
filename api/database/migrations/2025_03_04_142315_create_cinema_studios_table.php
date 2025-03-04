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
        Schema::create('cinema_studios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cinema_id')->constrained('cinemas');
            $table->foreignId('studio_id')->constrained('studios');
            $table->integer('total_seats');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cinema_studios');
    }
};
