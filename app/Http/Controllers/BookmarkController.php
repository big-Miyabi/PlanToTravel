<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Schedule;
use App\User;
use App\Bookmark;


class BookmarkController extends Controller
{
  public function bookmark(Request $request)
  {
    $check = User::findOrFail($request->uid);
    $check = Schedule::findOrFail($request->sid);
    $bookmark = [
      'uid' => $request->uid,
      'schedule_id' => $request->sid
    ];

    $bookMarkUid = Bookmark::select('uid')->where('uid', $request->uid)->where('schedule_id', $request->sid)->value("uid");

    if ($bookMarkUid != $request->uid) {
      $check->bookmarks()->create($bookmark);
      $msg = "ブックマークしました";
      return $msg;
    } else {
      $bookmarkId = Bookmark::select('id')->where('uid', $request->uid)->where('schedule_id', $request->sid)->value("id");
      $bookmark = Bookmark::find($bookmarkId);
      $bookmark->delete();
      $msg = "delete";
      return $msg;
    }
  }
}
