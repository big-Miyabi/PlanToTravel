<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Schedule;
use App\Tag;
use App\Place;
use App\Schedules_place;
use App\Schedules_tag;

class ScheduleController extends Controller
{
  public function create(Request $request)
  {
    $tempDay = null;
    $order = 0;
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
      // $params = $val->validate([
      //   'day' => 'required|date',
      //   'place_name' => 'required|string|max:63',
      //   'longitude' => 'required|integer',
      //   'latitude' => 'required|integer',
      //   'weather' => 'required'
      // ]);
      // //SQL実行
      if ($tempDay !== $request->input('day')[$key]) {
        $tempDay = $request->input('day')[$key];
        $order = 0;
      }
      $order++;
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
        'order_number' => $order
      ]);
      // placeTableのID取得
      $PlaceId = $params['id'];
      // 実際にあるかの判定
      $post = Place::findOrFail($PlaceId);
      // paramsに格納
      $params = ['place_id' => $PlaceId, 'schedule_id' => $ScheduleId];
      //  紐付けテーブルに格納
      $post->schedules_places()->create($params);
    }
  }
  //bladeの方でテスト
  // public function index()
  // {
  //   $schedules = Schedule::orderBy('created_at', 'desc')->get();
  //   $tags = Tag::orderBy('created_at', 'desc')->get();
  //   $places = Place::orderBy('created_at', 'desc')->get();
  //   return  view('show', ['tags' => $tags, 'places' => $places, 'schedules' => $schedules]);
  // }
  public function index()
  {
    //送るデータの格納
    $posts = [];
    //スケジュールデータ
    $texts = [];
    //タグデータ
    $tagBox = [];
    //場所データ
    $placeBox = [];
    //テーブルの値を取得
    $schedules = Schedule::orderBy('created_at', 'desc')->get();
    $tags = Tag::orderBy('created_at', 'desc')->get();
    $places = Place::orderBy('created_at', 'desc')->get();
    //値をpostsに格納する
    foreach ($schedules as $key => $schedule) {
      //スケジュールデータ
      $id = $schedule->id;
      $userid = $schedule->uid;
      $title = $schedule->title;
      $header = $schedule->header;
      $people = $schedule->people;
      $day_s = $schedule->day_s;
      $day_f = $schedule->day_f;
      $is_public = $schedule->is_public;
      $texts = [
        $id,
        $userid,
        $title,
        $header,
        $people,
        $day_s,
        $day_f,
        $is_public
      ];
      //タグデータ
      foreach ($schedule->schedules_tags  as $tagKey => $st) {
        foreach ($tags as $tag) {
          if ($st->tag_id == $tag->id) {
            $tagBox[$tagKey] = $tag->tag_name;
          }
        }
      }
      // 場所データ
      foreach ($schedule->schedules_places  as $placeKey => $sp) {
        foreach ($places as  $place) {
          if ($sp->place_id == $place->id) {
            $placeName = $place->place_name;
            $orderNumber = $place->order_number;
            $day = $place->day;
            $img = $place->img;
            $longitude = $place->longitude;
            $latitude = $place->latitude;
            $rating = $place->rating;
            $weather = $place->wether;
            $transport = $place->transport;
            $transportD = $place->transport_detail;
            $distance = $place->distance;
            $comment = $place->comment;
            $placeBox[$placeKey] = [
              $placeName,
              $orderNumber,
              $day,
              $img,
              $longitude,
              $latitude,
              $rating,
              $weather,
              $transport,
              $transportD,
              $distance,
              $comment
            ];
          }
        }
      }
      $posts[$key] = [$texts, $tagBox, $placeBox];
    }
    //値を返す
    return $posts;
  }
}
