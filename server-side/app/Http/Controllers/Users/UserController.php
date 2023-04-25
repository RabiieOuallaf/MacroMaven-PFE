<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Interfaces\UserServiceInterface;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Carbon\Carbon;

class UserController extends Controller implements UserServiceInterface
{
    static public function getUser(Request $request): ?JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
        $UserData = $validator->validated();
        $id = $UserData['user_id'];
        $user = User::with('bmi')->find($id);
        if ($user) {
            $birthday = Carbon::parse($user->birthday);
            $age = $birthday->age;
            $user->age = $age;
            return response()->json(['userData' => $user]);
        } else {
            return response()->json(['errors' => 'User not found'], 404);
        }
    }

    static public function getUsers(): ?JsonResponse 
    {
        $users = User::with('bmi')->get();
        return response()->json(['Users' => $users], 200);
    }

    static public function updateUser(Request $request) :? JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required', 
            'name' => 'required',
            'birthday' => 'required'
        ]);
        $userData = $validator->validated();
        $user = User::find($userData['id']);
        if($user->update($userData)){
            return response()->json(['User data is updated successfully'], 201);
        }else {
            return response()->json(['an erorr occured , please try later!'], 400);
        }

    }
}
