<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangePlacesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('places', function (Blueprint $table) {
      //
      $table->float('latitude', 11, 20)->change();
      $table->float('longitude', 11, 20)->change();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('places', function (Blueprint $table) {
      //
    });
  }
}
