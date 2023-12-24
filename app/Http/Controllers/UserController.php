<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistrationRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public static function registration(RegistrationRequest $request){
        $newUser = new User;

        $newUser->name = $request->userName;
        $newUser->email = $request->email;
        $newUser->password = Hash::make($request->password);

        $newUser->save();

        return response()->json(["user" => $newUser, "message" => "User registered"])
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'POST, OPTIONS')
            ->header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');;
    }

    public static function login(Request $request){

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            session("loggedUser", $user);
            return response()->json([
                'user' => $user,
                'message' => 'Login successful'
            ])->header('Access-Control-Allow-Origin', '*');
        } else {
            return response()->json([
                'error' => 'Invalid credentials'
            ])->header('Access-Control-Allow-Origin', '*');
        }
    }
}
