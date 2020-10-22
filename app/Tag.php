<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
  //
  protected $fillable = [
    'tag_name'
  ];
  public function schedules_tags()
  {
    return $this->hasMany('App\Schedules_tag');
  }
}
