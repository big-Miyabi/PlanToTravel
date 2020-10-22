<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Schedule;
use App\User;
use App\Like;

class LikeController extends Controller
{
  //
  public function like(Request $request)
  {
    $check = User::findOrFail($request->uid);
    $check = Schedule::findOrFail($request->sid);
    $likes = ['uid' => $request->uid, 'schedule_id' => $request->sid];
    $likeUid = Like::select('uid')->where('uid', $request->uid)->where('schedule_id', $request->sid)->value("uid");
    if ($likeUid != $request->uid) {
      $check->likes()->create($likes);
      $msg = "いいねしました";
      return $msg;
    } else {
      $likeId = Like::select('id')->where('uid', $request->uid)->where('schedule_id', $request->sid)->value("id");
      $like = Like::find($likeId);
      $like->delete();
      $msg = "delete";
      return $msg;
    }
  }
}
