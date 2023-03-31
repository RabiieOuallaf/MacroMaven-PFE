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
        $formFields = Validator::make($request->all(), [
            'name' => ['required', 'min:4', 'unique:macro_users.users'],
            'email' => ['required', 'email', 'unique:macro_users.users'],
            'password' => ['required', 'min:8','regex:/^(?=.*[a-z])(?=.*[A-Z])/']
        ]);
        
        // Hash the password 
        $formFields['password'] = bcrypt($formFields['password']);
        // Create user  and establich database connection 

        $user = DB::connection('macro_users')->transaction(function () use ($formFields) {
            $user = User::create([
                'username' => $formFields['username'],
                'email' => $formFields['email'],
                'password' => Hash::make($formFields['password']),
            ]);

            return $user;
        });
        return response()->json(['user' => $user], 201);
        

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
