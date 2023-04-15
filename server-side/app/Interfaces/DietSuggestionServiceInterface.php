<?php 

namespace App\Interfaces;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;


interface DietSuggestionInterface {
    static public function DietDataValidator(Request $request) : JsonResponse;
}