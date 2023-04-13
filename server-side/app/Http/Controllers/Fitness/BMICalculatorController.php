<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class BMICalculatorController extends Controller
{
    // Calculate user's BMI in metric units(CM,KG)

    static public function calculateBMIMetric(Request $request): JsonResponse
    {
        // Validated the coming data
        $validatedData = Validator::make($request->all(), [
            'height' => 'required|numeric|min:1|max:205',
            'weight' => 'required|numeric|min:1|max:250',
            'gender' => 'required|in:male,female',
        ]);
        // error handling 
        if ($validatedData->fails()) {
            return response()->json(['eror' => $validatedData->erorrs(), 422]);
        }


        $data = $validatedData->validated(); // Get the validated data


        $height = $data['height']/ 100; // Convert height from cm to m
        $weight = $data['weight'];
        $gender = $data['gender'];

        $bmi = $weight / ($height * $height);
        // Change bmi value based on user's gender
        if($gender == 'male') {
            $bmi *= 1.1;
        }elseif ($gender == 'female') {
            $bmi *= 0.9;
        }

        return response()->json(['results' => $bmi]);

    }
}
