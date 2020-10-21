<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Schedule;
use App\Tag;
use App\Place;
use App\Schedules_place;

class ScheduleController extends Controller
{
  public function create(Request $request)
  {
    // return Schedules_place::select('id')->where('schedule_id', 100)->count();
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
      $TagId = Tag::select('id')->where('tag_name',  $val)->value('id');
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
    foreach ($request->input(
      'day',
      'img',
      'place_name',
      'longitude',
      'latitude',
      'rating',
      'weather',
      'transport',
      'transport_detail',
      'comment'
    ) as $key => $val) {
      // バリデートをどうするかで悩み
      // $params = $request->validate([
      //   'day' => 'required|date',
      //   'place_name' => 'required|string|max:63',
      //   'longitude' => 'required|integer',
      //   'latitude' => 'required|integer',
      //   'weather' => 'required'
      // ]);

      // //SQL実行
      $params = Place::create([
        'day' => $request->input('day')[$key],
        'place_name' => $request->input('place_name')[$key],
        'longitude' => $request->input('longitude')[$key],
        'latitude' => $request->input('latitude')[$key],
        'weather' => $request->input('weather')[$key],
        'img' => $request->input('img')[$key],
        'transport' => $request->input('transport')[$key],
        'transport_detail' => $request->input('transport_detail')[$key],
        'comment' => $request->input('comment')[$key],
        'distance' => $request->input('distance')[$key],
        'rating' => $request->input('rating')[$key],
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
}
