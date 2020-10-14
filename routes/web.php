<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//   return view('welcome');
// });

// Route::get('/{any}', function () {
//   return view('auth/App');
// })->where('any', '.*'); // .*は、正規表現で0文字以上の任意の文字列を意味する
Auth::routes();
Route::get('/', function () {
  return view('welcome');
});
Route::get('/home', 'HomeController@index')->name('home');
