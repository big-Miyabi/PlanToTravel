<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Schedule;
use App\Tag;

class PostController extends Controller
{
  public function create(Request $request)
  {
    // scheduleTableのばりで
    $params = $request->validate([
      'uid' => 'required|exists:users,id',
      'title' => 'required|string|max:63',
      'header' => 'required',
      'people' => 'required|max:2000',
      'day_s' => 'required|date',
      'day_f' => 'required|date',
      'is_public' => 'required',
    ]);
    // insert文実行
    Schedule::create($params);
    // scheduleTableのId取得
    $ScheduleId = Schedule::select('id')->where('title', 'LIKE', $request->title)->where('day_s', 'LIKE', $request->day_s)->where('day_f', 'LIKE', $request->day_f)->value('id');
    //  tagTableのばりで
    $params = $request->validate([
      'tag_name' => 'required',
    ]);
    // 既存のtag_nameがあるか判別
    $TagName = Tag::select('tag_name')->where('tag_name', 'LIKE', $request->tag_name)->value('tag_name');
    if ($request->tag_name != $TagName) {
      // 既存のない時実行
      Tag::create($params);
    }
    // tagTableのID取得
    $TagId = Tag::select('id')->where('tag_name', 'LIKE', $request->tag_name)->value('id');
    // 実際にあるかの判定
    $post = Schedule::findOrFail($ScheduleId);
    $post = Tag::findOrFail($TagId);
    // paramsに格納
    $params = ['tag_id' => $TagId, 'schedule_id' => $ScheduleId];
    //  paramsに入れた値を'$post = Tag::findOrFail($TagId);'の中にあるschedules_tags()を使ってschedules_tagsに格納
    $post->schedules_tags()->create($params);
  }
}
