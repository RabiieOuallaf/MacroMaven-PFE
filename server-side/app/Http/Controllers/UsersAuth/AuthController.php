<?php

namespace App\Http\Controllers\UsersAuth;

use Database\Factories\AuthFactory;
use Illuminate\Http\Request;
use App\Interfaces\AuthenticationServiceInterface as AuthInterface;
use App\Http\Controllers\Controller;
use App\Models\User;
use Database\Factories\AuthenticationFactory;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller implements AuthInterface
{
    
    
    static public function register(Request $request) :?JsonResponse
    {
        $authService = AuthenticationFactory::create($request->authenticationType);
        $userData = $request;
        $user = $authService::register($userData);
        if($user){
            return response()->json(['message' => $user], 201);
        }else {
            return response()->json(['message' => 'Register failed'], 501);
        }
    }

    static public function login(Request $request) :?JsonResponse
     {
        $authService = AuthenticationFactory::create($request->authenticationType);
        $userData = $request;
        $user = $authService::login($userData);

        if($user){
            return response()->json(['message' => $user], 200);
        }else{
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    static public function deleteUser(User $user) :?JsonResponse
    {
        $user->delete();
        return response()->json(['message' => 'User deleted !'], 200);
    }

}