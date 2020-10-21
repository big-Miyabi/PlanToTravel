<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

// class User extends Model
// {
//   protected $fillable = [
//     'username', 'email', 'password', 'icon', 'header'
//   ];
// }
class User extends Authenticatable
{
  use Notifiable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'username', 'email', 'password', 'icon', 'header', 'porofile',
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
    'password', 'remember_token',
  ];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
  ];
  public function schedules()
  {
    return $this->hasMany('App\Schedule');
  }

  public function likes()
    {
        return $this->belongsToMany(Movie::class, 'likes', 'user_id', 'schedule_id')->withTimestamps();
    }

    public function like($scheduleId)
    {
        $exist = $this->is_like($scheduleId);

        if($exist){
            return false;
        }else{
            $this->likes()->attach($scheduleId);
            return true;
        }
    }

    public function unlike($scheduleId)
    {
        $exist = $this->is_like($scheduleId);

        if($exist){
            $this->likes()->detach($scheduleId);
            return true;
        }else{
            return false;
        }
    }

    public function is_like($scheduleId)
    {
        return $this->likes()->where('schedule_id',$scheduleId)->exists();
    }
}
