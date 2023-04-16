<?php

use App\Facades\FitnessFacade;
use App\Http\Controllers\Fitness\BMICalculatorController;
use App\Http\Controllers\Fitness\DietSuggestionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::post('/bmi', [BMIcalculatorController::class, 'calculateBMIMetric']);
Route::post('/diet' , [DietSuggestionController::class, 'DietDataValidator']);


Route::post('/bmiCalculator', function(Request $request) {
    $bmiCalculator = FitnessFacade::calculateBMIMetric($request);
    return response()->json($bmiCalculator);
});

Route::post('/dietSuggestor', function(Request $request) {
    $suggestedDiet = FitnessFacade::DietData($request);
    return response()->json($suggestedDiet);
});