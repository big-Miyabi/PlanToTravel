<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
  //
  public function register(Request $request)
  {
    $params = $request->validate([
      'username' => ['required', 'string', 'max:255'],
      'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
      'password' => ['required', 'string', 'min:8'],
      // 'username' => ['required'],
      // 'email' => ['required'],
      // 'password' => ['required'],
      'icon' => ['required'],
      'header' => ['required'],
    ]);

    User::create($params);
  }
}
