<?php

namespace App\Http\Controllers\UsersAuth;

use App\Http\Controllers\Controller;
use App\Interfaces\AuthenticationServiceInterface as AuthInterface;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class EmailAuthenticationController extends Controller implements AuthInterface
{
    static public function register(Request $request)  :? JsonResponse
    {
        $formFields = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);
        // Create user  and establich database connection 

        $user = DB::connection('macro_users')->transaction(function () use ($formFields) {
            $user = User::create([
                'name' => $formFields['name'],
                'email' => $formFields['email'],
                'password' => Hash::make($formFields['password']),
            ]);

            return $user;
        });
        return response()->json(['user' => $user], 201);
        

    }

    static public function login(Request $request) :? JsonResponse 
    {
        $credentials = Validator::make($request->all(), [
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if($credentials->fails()){
            return response()->json(['Error' => $credentials->errors()], 401);
        }

        $credentials = $request->only('email', 'password');

        if(Auth::attempt($credentials)){
            $user = $request->user();
            $token = $user->createToken('Access token')->accessToken; 
            return response()->json(['token' => $token, 200]);
        }else{
            return response()->json(['Message' => 'Unauthorized'], 401);
        };
    }



}
