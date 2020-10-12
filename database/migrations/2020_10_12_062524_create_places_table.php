<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlacesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('places', function (Blueprint $table) {
          $table->increments("id");
          $table->integer("order_number");
          $table->date("day");
          $table->text("img")->nullable();
          $table->string("place_name", 63);
          $table->integer("longitude");
          $table->integer("latitude");
          $table->tinyInteger("rating")->nullable();
          $table->string("weather",5);
          $table->string("transport",5)->nullable();
          $table->string("transport_detail",15)->nullable();
          $table->string("distance",63)->nullable();
          $table->string("comment",255)->nullable();
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('places');
    }
}
