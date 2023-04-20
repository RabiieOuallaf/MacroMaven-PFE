<?php 

namespace App\Interfaces;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;


interface UserServiceInterface  {
    static public function getUser(Request $request) :? JsonResponse;
} 