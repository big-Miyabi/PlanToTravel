<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Schedule;
use App\Tag;
use App\Place;
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
  public function userBookmark(Request $request)
  {
    $schedules = Schedule::orderBy('created_at', 'desc')->get();
    $tags = Tag::orderBy('created_at', 'desc')->get();
    $places = Place::orderBy('created_at', 'desc')->get();
    $bookmarks = Bookmark::orderBy('created_at', 'desc')->get();

    //スケジュールデータ
    $texts = [];
    //タグデータ
    $tagBox = [];
    //場所データ
    $placeBox = [];
    $counter = 0;
    foreach ($bookmarks as  $bookmark) {

      if ($bookmark->uid == $request->uid) {

        foreach ($schedules as $key => $schedule) {
          if ($schedule->id == $bookmark->schedule_id) {
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
      }
    }
    return $posts;
  }
}
