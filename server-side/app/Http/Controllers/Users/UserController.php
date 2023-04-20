<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Interfaces\UserServiceInterface;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class UserController extends Controller implements UserServiceInterface
{
    static public function getUser(Request $request)  :? JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required'
        ]);

        if($validator->fails()){
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $UserData = $validator->validated();

        $id = $UserData['user_id'];


        $user = User::find($id);

        if($user){
            return response()->json(['userData' => $user]);
        }else{
            return response()->json(['errors' => 'User not found'], 404);
        }
    }
}
