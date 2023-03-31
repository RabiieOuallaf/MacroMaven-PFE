<?php

namespace App\Http\Controllers\UsersAuth;

use App\Http\Controllers\Controller;
use App\Interfaces\AuthenticationServiceInterface as AuthInterface;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmailAuthenticationController extends Controller implements AuthInterface
{
    static public function register(Request $request)  :? JsonResponse
    {
        $formFields = $request->validate([
            'name' => ['required', 'min:4'],
            'email' => ['required', 'email', '  unique:users'],
            'password' => ['required', 'min:8','regex:/^(?=.*[a-z])(?=.*[A-Z])/']
        ]);
        
        // Hash the password 
        $formFields['password'] = bcrypt($formFields['password']);
        // Create user  
        if(User::create($formFields)){
            return response()->json(['Message' => 'User created seccussfully!', 201]);
        }else{
            return response()->json(['Message' => "There's a problem with your registration request ! " , 401]);
        }

    }

    static public function login(Request $request) :? JsonResponse 
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'min:8','regex:/^(?=.*[a-z])(?=.*[A-Z])/']
        ]);
        if(Auth::attempt($credentials)){
            return response()->json(['Message' => 'User logged in seccussfully!', 200]);
        }else{
            return response()->json(['Message' => 'User not found'], 401);
        };
    }



}
