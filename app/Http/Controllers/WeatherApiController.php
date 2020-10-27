<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherApiController extends Controller
{
  //
  public function getWeather(Request $request)
  {
    $api = config("app.weather_api");
    $url = "https://weather2020-weather-v1.p.rapidapi.com/city/" . $api . "/Tokyo,JP";
    return $url;
  }
}
