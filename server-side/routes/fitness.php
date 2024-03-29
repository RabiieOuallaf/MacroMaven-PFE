<?php

use App\Facades\FitnessFacade;
use App\Http\Controllers\Fitness\BMICalculatorController;
use App\Http\Controllers\Fitness\DietSuggestionController;
use App\Http\Controllers\Fitness\ExerciceController;
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
Route::post('/addexercice',[ExerciceController::class, 'addExercice']);
Route::put('/updateexercice',[ExerciceController::class, 'updateExercice']);
Route::delete('/deleteexercice', [ExerciceController::class, 'deleteExercice']);
Route::get('/getexercicebycategory', [ExerciceController::class, 'displayExercicesByCategory']);
Route::get('/getexercicebyid', [ExerciceController::class, 'getExerciceById']);
Route::get('/getexercices', [ExerciceController::class, 'getExercices']);


