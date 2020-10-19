<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
  //
  protected $fillable = [
    'order_number', 'day', 'img', 'place_name', 'longitude', 'latitude', 'rating', 'weather', 'transport', 'transport_detail', 'distance', 'comment',
  ];
  public function schedules_places()
  {
    return $this->hasMany('App\Schedules_place');
  }
}
