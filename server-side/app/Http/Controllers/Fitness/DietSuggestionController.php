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

        $result = self::DietSuggestor($userBMI);

        return response()->json($result);
        
    }

    // Suggest a diet based on the user's BMI 

    static private function DietSuggestor(string $bmiCategory) : JsonResponse
    {
        define('BMI_UNDERWEIGHT_DIET', 'Optifast');
        define('BMI_NORMAL_DIET', 'DASH');
        define('BMI_OVERWEIGHT_DIET', 'Atkins');
        define('BMI_OBESE_1_DIET', 'Keto');
        define('BMI_OBESE_2_DIET', 'HMR');

        switch($bmiCategory) {
            case 'BMI_UNDERWEIGHT': 
                return response()->json(['Diet' => BMI_UNDERWEIGHT_DIET]);
                break;
            case 'BMI_NORMAL': 
                return response()->json(['Diet' => BMI_NORMAL_DIET]);
                break;
            case 'BMI_OVERWEIGHT': 
                return response()->json(['Diet' => BMI_OVERWEIGHT_DIET]);
                break;
            case 'BMI_OBESE_1': 
                return response()->json(['Diet' => BMI_OBESE_1_DIET]);
                break;
            case 'BMI_OBESE_2': 
                return response()->json(['Diet' => BMI_OBESE_2_DIET]);
            default: 
                return response()->json(["Error occured : The bmi category isn't avialble for the moment , please try later !"]);
                break;
        }
            
        
    }
}   
