<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedules_tag extends Model
{
  //
  protected $fillable = [
    'schedule_id', 'tag_id'
  ];
  public function schedule()
  {
    return $this->belongsTo('App\Schedule');
  }
  public function tag()
  {
    return $this->belongsTo('App\Tag');
  }
}
