<?php

namespace App\Http\Controllers\Fitness;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
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
        if($gender == 'female') {
            $bmi *= 0.9;
        }

        $status = '';
        $comment = '';

        if ($bmi < 18.5) {
            $status = 'Underweight';
            $comment = 'You need to eat more, skinny!';
        } elseif ($bmi >= 18.5 && $bmi < 25) {
            $status = 'Normal weight';
            $comment = 'You are doing great, keep it up!';
        } elseif ($bmi >= 25 && $bmi < 30) {
            $status = 'Overweight';
            $comment = 'Time to hit the gym!';
        } elseif ($bmi >= 30 && $bmi < 35) {
            $status = 'Obese (Class I)';
            $comment = 'No more TacoTaco for you!';
        } elseif ($bmi >= 35 && $bmi < 40) {
            $status = 'Obese (Class II)';
            $comment = 'You need to make some serious lifestyle changes , Avoid afterTaste !';
        } else {
            $status = 'Obese (Class III)';
            $comment = 'You need to see a doctor ASAP!';
        }
    
        $result = [
            'bmi' => $bmi,
            'status' => $status,
            'comment' => $comment,
        ];

        return response()->json(['results' => $result]);

    }
}

