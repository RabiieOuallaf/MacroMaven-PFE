<?php

namespace App\Http\Controllers\UsersAuth;

use App\Http\Controllers\Controller;
use App\Interfaces\AuthenticationServiceInterface as AuthInterface;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class EmailAuthenticationController extends Controller implements AuthInterface
{
    static public function register(Request $request)  :? JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
            'birthday' => 'required|date',
            'picture' => 'required'
        ]);
        if($validator->fails()){
            return response()->json(['errors' => $validator->errors()], 400);
        }
        // handle file upload 
        if($request->hasFile('picture')){
            $file = $request->file('picture');
            $fileName =  time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('public/images', $fileName);
        }else{
            $filePath = null;
        }
         
        $formFields = $validator->validated(); // Get the value of attributes that has been validated 

        $formFields['password'] = Hash::make($formFields['password']);

        $user = User::create($formFields);

        if($user){
           $token = JWTAuth::fromUser($user);
           $userId = $user->id;
            return response()->json([
                'Message' => "User created seccussfully !", 
                'Token' => $token,  
                'user_id' => $userId,
                'picture_url' => $filePath
                ],201);
        }else{
            return response()->json(['Message' => "There's a problem with your registration request ! " , 400]);
        }
        

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

        $formFields = $credentials->validated();

        $userAuthenticated = Auth::guard('api')->attempt($formFields);

        if($userAuthenticated){
            $user = $request->user();
            $token = JWTAuth::fromUser($user);
            return response()->json(['token' => $token, 200]);
        }else{
            return response()->json(['Message' => 'Unauthorized'], 401);
        };
    }
    



}
