<?php 

namespace App\Interfaces;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;


interface DietSuggestionInterface {
    static public function DietData(Request $request) : JsonResponse;
}