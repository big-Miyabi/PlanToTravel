<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedulesTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules_tags', function (Blueprint $table) {
          $table->increments("id");
        $table->unsignedInteger('schedule_id');
        $table->unsignedInteger('tag_id');
        $table->timestamps();
        $table->foreign('schedule_id')->references('id')->on('schedules');
        $table->foreign('tag_id')->references('id')->on('tags');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules_tags');
    }
}
