<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
          $table->increments('id');
          $table->unsignedInteger('uid');
          $table->string('title', 63);
          $table->text('header');
          $table->integer('people');
          $table->date('day_s');
          $table->date('day_f');
          $table->boolean('is_public');
          $table->timestamps();
          $table->softDeletes();
          // 以下外部キー
          $table->foreign('uid')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
}
