<?php

namespace App\Http\Controllers\EmailAuthenticationController;

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
            'username' => ['requried', 'min:4'],
            'email' => ['required', 'email', '  unique:users'],
            'password' => ['required', 'min:8','regex:/^(?=.*[a-z])(?=.*[A-Z])/']
        ]);

        // Hash the password 
        $formFields['password'] = bcrypt($formFields['password']);
        // Create user  
        User::create($formFields);

        return response()->json(['Message' => 'User created seccussfully!', 201]);
    }

    static public function login(Request $request) :? JsonResponse 
    {
        $credentials = $request->validate([
            'email' => ['required', 'email', '  unique:users'],
            'password' => ['required', 'min:8','regex:/^(?=.*[a-z])(?=.*[A-Z])/']
        ]);

        if(Auth::attempt($credentials)){
            return response()->json(['Message' => 'User logged in seccussfully!', 200]);
        }else{
            return response()->json(['Message' => 'User not found'], 404);
        };
    }



}
