<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Schedule;
use App\Tag;
use App\Place;
use App\Like;
use App\Bookmark;

function stringToDate($string)
{
  $day = str_replace('.', '', $string);
  $formattedDay = date('YYYY-MM-DD', strtotime($day));
  return $formattedDay;
}

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
    foreach ($request->input('itinerary') as $places) {
      foreach ($places as $key => $place) {
        // バリデーションルール作成
        // $rules = [
        //   'date' => ['required'],
        //   'name' => ['required', 'string', 'max:63'],
        //   'location.lat' => ['required', 'integer'],
        //   'location.lng' => ['required', 'integer'],
        //   'weather' => ['required']
        // ];
        // // バリデーション実行
        // $this->validate($place, $rules);
        // //SQL実行
        $params = Place::create([
          'day' => $place['date'],
          'place_name' => $place['name'],
          'latitude' => $place['location']['lat'],
          'longitude' => $place['location']['lng'],
          'weather' => $place['weather'],
          'img' => $place['image'],
          'transport' => $place['transport'],
          'transport_detail' => $place['transportDetail'],
          'comment' => $place['comment'],
          'distance' => $place['distance'],
          'rating' => $place['rating'],
          'order_number' => $key + 1
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
    return $ScheduleId;
  }
  public function index(Request $request)
  {
    //送るデータの格納
    $posts = [];
    //スケジュールデータ
    $texts = [];
    //タグデータ
    $tagBox = [];
    //場所データ
    $placeBox = [];
    //いいねの値
    $likeUid = false;
    $bookmarkUid = false;
    //テーブルの値を取得
    $schedules = Schedule::orderBy('created_at', 'desc')->where('is_public', 0)->get();
    $tags = Tag::orderBy('created_at', 'desc')->get();
    $places = Place::orderBy('created_at', 'desc')->get();
    $likes = Like::orderBy('created_at', 'desc')->get();
    $bookmarks = Bookmark::orderBy('created_at', 'desc')->get();
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
        'id' => $id,
        'userid' => $userid,
        'title' => $title,
        'header' => $header,
        'people' => $people,
        'day_s' => $day_s,
        'day_f' => $day_f,
        'is_public' => $is_public
      ];
      //タグデータ
      foreach ($schedule->schedules_tags  as $tagKey => $st) {
        foreach ($tags as $tag) {
          if ($st->tag_id == $tag->id) {
            $tagBox[$tagKey] = ['tagname' => $tag->tag_name];
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
            $weather = $place->weather;
            $transport = $place->transport;
            $transportD = $place->transport_detail;
            $distance = $place->distance;
            $comment = $place->comment;
            $placeBox[$placeKey] = [
              'placename' => $placeName,
              'ordernumber' => $orderNumber,
              'day' => $day,
              'img' => $img,
              'longitude' => $longitude,
              'latitude' => $latitude,
              'rating' => $rating,
              'weather' => $weather,
              'transport' => $transport,
              'transportD' => $transportD,
              'distance' => $distance,
              'comment' => $comment
            ];
          }
        }
      }
      //初期化
      $likeCount = 0;
      //いいねの数の取得
      foreach ($likes as  $likeKye => $like) {
        if ($like->schedule_id == $schedule->id) {
          $likeCount++;
          if ($like->uid == $request->uid) {
            $likeUid = true;
          }
        }
      }
      foreach ($bookmarks as  $booKye => $bookmark) {
        if ($bookmark->schedule_id == $schedule->id) {
          if ($bookmark->uid == $request->uid) {
            $bookmarkUid = true;
          }
        }
      }
      $posts[$key] = ['schedule' => $texts, 'tags' => $tagBox, "places" => $placeBox, 'likeCounter' => $likeCount, 'is_liked' => $likeUid, 'is_bookmark' => $bookmarkUid];
    }
    //値を返す
    return $posts;
  }
  //詳細ページ
  public function show(Request $request)
  {
    $schedules = Schedule::orderBy('created_at', 'desc')->get();
    $tags = Tag::orderBy('created_at', 'desc')->get();
    $places = Place::orderBy('created_at', 'desc')->get();
    $likes = Like::orderBy('created_at', 'desc')->get();
    $bookmarks = Bookmark::orderBy('created_at', 'desc')->get();
    //スケジュールデータ
    $texts = [];
    //タグデータ
    $tagBox = [];
    //場所データ
    $placeBox = [];
    $likeUid = false;
    $bookmarkUid = false;
    foreach ($schedules as $key => $schedule) {
      if ($schedule->id == $request->sid) {
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
          'id' => $id,
          'userid' => $userid,
          'title' => $title,
          'header' => $header,
          'people' => $people,
          'day_s' => $day_s,
          'day_f' => $day_f,
          'is_public' => $is_public
        ];
      }
      foreach ($schedule->schedules_tags  as $tagKey => $st) {
        if ($st->schedule_id == $request->sid) {
          foreach ($tags as $tag) {
            if ($st->tag_id == $tag->id) {
              $tagBox[$tagKey] = ['tagname' => $tag->tag_name];
            }
          }
        }
      }
      foreach ($schedule->schedules_places  as $placeKey => $sp) {
        if ($sp->schedule_id == $request->sid) {
          foreach ($places as  $place) {
            if ($sp->place_id == $place->id) {
              $placeName = $place->place_name;
              $orderNumber = $place->order_number;
              $day = $place->day;
              $img = $place->img;
              $longitude = $place->longitude;
              $latitude = $place->latitude;
              $rating = $place->rating;
              $weather = $place->weather;
              $transport = $place->transport;
              $transportD = $place->transport_detail;
              $distance = $place->distance;
              $comment = $place->comment;
              $placeBox[$placeKey] = [
                'placename' => $placeName,
                'ordernumber' => $orderNumber,
                'day' => $day,
                'img' => $img,
                'longitude' => $longitude,
                'latitude' => $latitude,
                'rating' => $rating,
                'weather' => $weather,
                'transport' => $transport,
                'transportD' => $transportD,
                'distance' => $distance,
                'comment' => $comment
              ];
            }
          }
        }
      }
      //初期化
      $likeCount = 0;
      //いいねの数の取得
      foreach ($likes as  $likeKye => $like) {
        if ($like->schedule_id == $schedule->id) {
          $likeCount++;
          if ($like->uid == $request->uid) {
            $likeUid = true;
          }
        }
      }
      foreach ($bookmarks as  $booKye => $bookmark) {
        if ($bookmark->schedule_id == $schedule->id) {
          if ($bookmark->uid == $request->uid) {
            $bookmarkUid = true;
          }
        }
      }
    }
    return [$texts, $tagBox, $placeBox, $likeUid, $likeCount, $bookmarkUid];
  }
  //ユーザごとのスケジュール表示
  public function userSchedule(Request $request)
  {
    $schedules = Schedule::orderBy('created_at', 'desc')->get();
    $tags = Tag::orderBy('created_at', 'desc')->get();
    $places = Place::orderBy('created_at', 'desc')->get();
    //スケジュールデータ
    $texts = [];
    //タグデータ
    $tagBox = [];
    //場所データ
    $placeBox = [];
    $counter = 0;
    foreach ($schedules as $key => $schedule) {
      if ($schedule->uid == $request->uid) {
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
          'id' => $id,
          'userid' => $userid,
          'title' => $title,
          'header' => $header,
          'people' => $people,
          'day_s' => $day_s,
          'day_f' => $day_f,
          'is_public' => $is_public
        ];
        foreach ($schedule->schedules_tags  as $tagKey => $st) {
          if ($st->schedule_id == $schedule->id) {
            foreach ($tags as $tag) {
              if ($st->tag_id == $tag->id) {
                $tagBox[$tagKey] = ['tagname' => $tag->tag_name];
              }
            }
          }
        }
        foreach ($schedule->schedules_places  as $placeKey => $sp) {
          if ($sp->schedule_id == $schedule->id) {
            foreach ($places as  $place) {
              if ($sp->place_id == $place->id) {
                $placeName = $place->place_name;
                $orderNumber = $place->order_number;
                $day = $place->day;
                $img = $place->img;
                $longitude = $place->longitude;
                $latitude = $place->latitude;
                $rating = $place->rating;
                $weather = $place->weather;
                $transport = $place->transport;
                $transportD = $place->transport_detail;
                $distance = $place->distance;
                $comment = $place->comment;
                $placeBox[$placeKey] = [
                  'placename' => $placeName,
                  'ordernumber' => $orderNumber,
                  'day' => $day,
                  'img' => $img,
                  'longitude' => $longitude,
                  'latitude' => $latitude,
                  'rating' => $rating,
                  'weather' => $weather,
                  'transport' => $transport,
                  'transportD' => $transportD,
                  'distance' => $distance,
                  'comment' => $comment
                ];
              }
            }
          }
        }
        $posts[$counter] = [$texts, $tagBox, $placeBox];
        $counter++;
      }
    }
    return $posts;
  }
  //削除機能
  public function delete(Request $request)
  {
    $post = Schedule::findOrFail($request->sid);
    $post->schedules_places()->delete();
    $post->schedules_tags()->delete();
    $post->likes()->delete();
    $post->delete();
    return "delete";
  }

  //検索機能
  public function search(Request $request)
  {
    $query = Schedule::query();
    $tags = Tag::orderBy('created_at', 'desc')->get();
    $places = Place::orderBy('created_at', 'desc')->get();
    $posts = [];
    $set = $request->search;
    $schedules = $query->where('title', 'LIKE', '%' . $set . '%')->get();
    $tagBox = [];
    $placeBox = [];
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
      $texts[$key] = [
        'id' => $id,
        'userid' => $userid,
        'title' => $title,
        'header' => $header,
        'people' => $people,
        'day_s' => $day_s,
        'day_f' => $day_f,
        'is_public' => $is_public
      ];
      foreach ($schedule->schedules_tags  as $tagKey => $st) {
        if ($st->schedule_id == $id) {
          foreach ($tags as $tag) {
            if ($st->tag_id == $tag->id) {
              $tagBox[$tagKey] = ['tagname' => $tag->tag_name];
            }
          }
        }
      }
      foreach ($schedule->schedules_places  as $placeKey => $sp) {
        if ($sp->schedule_id == $id) {
          foreach ($places as  $place) {
            if ($sp->place_id == $place->id) {
              $placeName = $place->place_name;
              $orderNumber = $place->order_number;
              $day = $place->day;
              $img = $place->img;
              $longitude = $place->longitude;
              $latitude = $place->latitude;
              $rating = $place->rating;
              $weather = $place->weather;
              $transport = $place->transport;
              $transportD = $place->transport_detail;
              $distance = $place->distance;
              $comment = $place->comment;
              $placeBox[$placeKey] = [
                'placename' => $placeName,
                'ordernumber' => $orderNumber,
                'day' => $day,
                'img' => $img,
                'longitude' => $longitude,
                'latitude' => $latitude,
                'rating' => $rating,
                'weather' => $weather,
                'transport' => $transport,
                'transportD' => $transportD,
                'distance' => $distance,
                'comment' => $comment
              ];
            }
          }
        }
      }
      $posts[$key] = [$texts[$key], $tagBox, $placeBox];
    }
    return $posts;
  }
}
