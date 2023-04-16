<?php 

namespace App\Services;

use App\Http\Controllers\Fitness\BMICalculatorController;
use App\Http\Controllers\Fitness\DietSuggestionController;
use App\Models\BMICalculator;
use Illuminate\Http\Request;

class FitnessService
{
    public function calculateBMIMetric() {
        $bmiCalculatorModel = new BMICalculatorController();
        $bmiCalculator = $bmiCalculatorModel->calculateBMIMetric(request());
        
        return response()->json($bmiCalculator);
    }

    public function DietData() {
        $dietSuggestor = new DietSuggestionController();
        $dietSuggestorData = $dietSuggestor->DietData(request());

        return response()->json($dietSuggestorData);
    }
}