<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Schedule;
use App\Tag;
use App\Place;

class ScheduleController extends Controller
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
    $scheduleData = Schedule::create($params);
    // scheduleTableのId取得
    $ScheduleId = $scheduleData['id'];
    //  tagTableのばりで
    $params = $request->validate([
      'tag_name' => 'required',
    ]);
    //   //  paramsに入れた値を'$post = Tag::findOrFail($TagId);'の中にあるschedules_tags()を使ってschedules_tagsに格納
    //   $post->schedules_tags()->create($params);
    // }
    foreach ($request->tag_name as $key => $val) {
      $params = ["tag_name" => $val];
      // 既存のtag_nameがあるか判別
      $TagName = Tag::select('tag_name')->where('tag_name', 'LIKE', $val)->value('tag_name');
      if ($val != $TagName) {
        // 既存のない時実行
        Tag::create($params);
      }
      // tagTableのID取得
      $TagId = Tag::select('id')->where('tag_name',  $request->tag_name)->value('id');
      // 実際にあるかの判定
      $post = Schedule::findOrFail($ScheduleId);
      $post = Tag::findOrFail($TagId);
      // paramsに格納
      $params = ['tag_id' => $TagId, 'schedule_id' => $ScheduleId];
      //  paramsに入れた値を'$post = Tag::findOrFail($TagId);'の中にあるschedules_tags()を使ってschedules_tagsに格納
      $post->schedules_tags()->create($params);
    }
    //palaceTable
    //validate処理
    $params = $request->validate([
      'day' => 'required|date',
      'place_name' => 'required|string|max:63',
      'longitude' => 'required|integer',
      'latitude' => 'required|integer',
      'weather' => 'required'
    ]);
    // //SQL実行
    $params = Place::create([
      'day' => $request->day,
      'place_name' => $request->place_name,
      'longitude' => $request->longitude,
      'latitude' => $request->latitude,
      'weather' => $request->weather,
      'img' => $request->img,
      'transport' => $request->transport,
      'transport_detail' => $request->transport_detail,
      'comment' => $request->comment,
      'distance' => $request->distance,
      'rating' => $request->rating,
      'order_number' => 1
    ]);
    // placeTableのID取得
    $PlaceId = $params['id'];
    // 実際にあるかの判定
    $post = Place::findOrFail($PlaceId);
    // paramsに格納
    $params = ['place_id' => $PlaceId, 'schedule_id' => $ScheduleId];
    //  paramsに入れた値を'$post = Tag::findOrFail($TagId);'の中にあるschedules_tags()を使ってschedules_tagsに格納
    $post->schedules_places()->create($params);
  }
}
