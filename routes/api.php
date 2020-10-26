<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});
Route::group(['middleware' => 'api'], function () {
  Route::post('create', 'ScheduleController@create');
  Route::get('index', 'ScheduleController@index');
  Route::post('show', 'ScheduleController@show');
  Route::post('like', 'LikeController@like');
  Route::post('userLike', 'LikeController@userLike');
  Route::post('delete', 'ScheduleController@delete');
  Route::post('bookmark', 'BookmarkController@bookmark');
  Route::post('search', 'ScheduleController@search');
  Route::post('getPlaceName', 'GoogleMapController@getPlaceName');
  Route::post('userSchedule', 'ScheduleController@userSchedule');
  Route::post('getWeather', 'WeatherApiController@getWeather');
});
Auth::routes();
