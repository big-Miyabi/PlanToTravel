<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedulesPlacesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules_places', function (Blueprint $table) {
          $table->increments("id");
        $table->unsignedInteger('schedule_id');
        $table->unsignedInteger('place_id');
        $table->timestamps();
        $table->foreign('schedule_id')->references('id')->on('schedules');
        $table->foreign('place_id')->references('id')->on('places');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules_places');
    }
}
