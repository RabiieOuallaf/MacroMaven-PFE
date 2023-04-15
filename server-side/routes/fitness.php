<?php

use App\Http\Controllers\Fitness\BMICalculatorController;
use App\Http\Controllers\Fitness\DietSuggestionController;
use Illuminate\Support\Facades\Route;

Route::post('/bmi', [BMIcalculatorController::class, 'calculateBMIMetric']);
Route::post('/diet' , [DietSuggestionController::class, 'DietDataValidator']);
