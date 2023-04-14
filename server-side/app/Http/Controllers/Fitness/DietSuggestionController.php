<?php

namespace App\Http\Controllers\Fitness;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class DietSuggestionController extends Controller
{
    // Validating the data    
    static public function DietDataValidator(Request $request) : JsonResponse
    {
        $validatedData = Validator::make($request->all(), [
            'id' => 'required',
            'BMI' => 'required'
        ]);
        // Erorr handling 
        if($validatedData->fails()) {
            return response()->json(['erorr' => $validatedData->errors()], 422);
        }

        $data = $validatedData->validated(); // Get the validated data 
        
        $userId = $data['id'];
        $userBMI = $data['BMI'];
        
        
        
    }
    // Suggest a diet based on the user's BMI 

    // static private function DietSuggestor(Request $request) : JsonResponse
    // {
    
    // }
}   
