<?php 

namespace App\Interfaces;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;


interface DietSuggestionInterface {
    static public function DietSuggestor(Request $request) : JsonResponse;
}