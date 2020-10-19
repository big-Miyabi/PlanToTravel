<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedules_place extends Model
{
  //
  protected $fillable = [
    'schedule_id', 'place_id'
  ];
  public function schedule()
  {
    return $this->belongsTo('App\Schedule');
  }
  public function place()
  {
    return $this->belongsTo('App\Place');
  }
}
