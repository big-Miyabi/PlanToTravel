<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class GoogleMapController extends Controller
{
  public function getPlaceName(Request $request)
  {
    $api = config("app.map_api");
    $url = "https://maps.googleapis.com/maps/api/place/details/json?language=ja&key=" . $api . "&placeid=" . $request->placeId;
    $respons = Http::get($url);
    return $respons;
  }
  public function getDistance(Request $request)
  {
    $api = config("app.map_api");
    $url = "https://maps.googleapis.com/maps/api/directions/json?origin=" . $request->origin . "&destination=" . $request->destination . "&mode=" . $request->mode . "&language=ja&key=" . $api;
    $respons = Http::get($url);
    return $respons;
  }
}
