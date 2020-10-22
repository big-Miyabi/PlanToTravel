<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
  //
  protected $fillable = [
    'uid', 'title', 'header', 'people', 'day_s', 'day_f', 'is_public',
  ];

  public function user()
  {
    return $this->belongsTo('App\User');
  }
  public function schedules_tags()
  {
    return $this->hasMany('App\Schedules_tag');
  }
  public function like_users()
  {
    return $this->belongsToMany(User::class, 'likes', 'schedule_id', 'user_id')->withTimestamps();
  }
}
