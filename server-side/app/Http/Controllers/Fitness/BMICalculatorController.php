<?php

namespace App\Http\Controllers\Fitness;

use App\Http\Controllers\Controller;
use App\Interfaces\BMICalculatorServiceInterface;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BMICalculatorController extends Controller implements BMICalculatorServiceInterface
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


        $height = $data['height'] / 100; // Convert height from cm to m
        $weight = $data['weight'];
        $gender = $data['gender'];


        $bmi = $weight / ($height * $height);
        // Determine the BMI status and comment
        list($bmiStatus, $bmiComment) = self::getBMIStatusAndComment($bmi, $gender);

        // Prepare the results
        $result = [
            'bmi' => $bmi,
            'status' => $bmiStatus,
            'comment' => $bmiComment,
        ];

        if($result) {
            
            return response()->json(['results' => $result]);

        }
    }

    static private function getBMIStatusAndComment(float $bmi, string $gender): array
    {
        // Define constants for BMI categories
        define('BMI_UNDERWEIGHT', 18.5);
        define('BMI_NORMAL', 25);
        define('BMI_OVERWEIGHT', 30);
        define('BMI_OBESE_1', 35);
        define('BMI_OBESE_2', 40);

        // Change BMI value based on user's gender
        if ($gender == 'female') {
            $bmi *= 0.9;
        }

        // Determine the BMI status and comment
        if ($bmi < BMI_UNDERWEIGHT) {
            $status = 'Underweight';
            $comment = 'You need to eat more, skinny!';
        } elseif ($bmi < BMI_NORMAL) {
            $status = 'Normal weight';
            $comment = 'You are doing great, keep it up!';
        } elseif ($bmi < BMI_OVERWEIGHT) {
            $status = 'Overweight';
            $comment = 'Time to hit the gym!';
        } elseif ($bmi < BMI_OBESE_1) {
            $status = 'Obese (Class I)';
            $comment = 'No more TacoTaco for you!';
        } elseif ($bmi < BMI_OBESE_2) {
            $status = 'Obese (Class II)';
            $comment = 'You need to make some serious lifestyle changes, avoid afterTaste!';
        } else {
            $status = 'Obese (Class III)';
            $comment = 'You need to see a doctor ASAP!';
        }

        return [$status, $comment];
    }
}
