<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
  //
  protected $fillable = [
    'uid', 'schedule_id'
  ];
  public function schedule()
  {
    return $this->belongsTo('App\Schedule');
  }
}
