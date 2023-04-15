<?php

namespace App\Http\Controllers\Fitness;

use App\Http\Controllers\Controller;
use App\Interfaces\DietSuggestionInterface;
use App\Models\Diet;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class DietSuggestionController extends Controller implements DietSuggestionInterface
{
    // Validating the data    
    static public function DietDataValidator(Request $request): JsonResponse
    {
        $validatedData = Validator::make($request->all(), [
            'id' => 'required',
            'BMI' => 'required'
        ]);
        // Erorr handling 
        if ($validatedData->fails()) {
            return response()->json(['erorr' => $validatedData->errors()], 422);
        }

        $data = $validatedData->validated(); // Get the validated data 

        $userId = $data['id'];
        $bmiValue = $data['BMI'];

        $result = self::DietSuggestor($bmiValue);

        return response()->json($result);
    }

    // Suggest a diet based on the user's BMI 

    static private function DietSuggestor(float $bmiValue): JsonResponse
    {
        define('BMI_UNDERWEIGHT_DIET', 'Paleo');
        define('BMI_NORMAL_DIET', 'Mediterranean');
        define('BMI_OVERWEIGHT_DIET', 'Atkins');
        define('BMI_OBESE_1_DIET', 'Keto');
        define('BMI_OBESE_2_DIET', 'HMR');
        define('BMI_OBESE_3_DIET', 'Optifast');


        $dietName = null;
        if ($bmiValue < 18.5) {
            $dietName = BMI_UNDERWEIGHT_DIET;
        } elseif ($bmiValue >= 18.5 && $bmiValue < 25) {
            $dietName = BMI_NORMAL_DIET;
        } elseif ($bmiValue >= 25 && $bmiValue < 30) {
            $dietName = BMI_OVERWEIGHT_DIET;
        } elseif ($bmiValue >= 30 && $bmiValue < 35) {
            $dietName = BMI_OBESE_1_DIET;
        } elseif ($bmiValue >= 35 && $bmiValue < 40) {
            $dietName = BMI_OBESE_2_DIET;
        } elseif ($bmiValue >= 40) {
            $dietName = BMI_OBESE_3_DIET;
        }


        if ($dietName !== null) {

            $diet = Diet::where('name', $dietName)->first();
            if ($diet !== null) {
                return response()->json(['Diet' => $diet]);
            }
        }

        return response()->json(["Error occured : The bmi category isn't available at the moment, please try again later!"]);
    }
}
