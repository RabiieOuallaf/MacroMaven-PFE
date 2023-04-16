<?php 

namespace App\Services;

use App\Http\Controllers\Fitness\BMICalculatorController;
use App\Models\BMICalculator;
use Illuminate\Http\Request;

class FitnessService
{
    public function calculateBMIMetric() {
        $bmiCalculatorModel = new BMICalculatorController();
        $bmiCalculator = $bmiCalculatorModel->calculateBMIMetric(request());
        
        return response()->json($bmiCalculator);
    }
}