<?php

use App\Http\Controllers\Fitness\BMICalculatorController;
use Illuminate\Support\Facades\Route;

Route::post('/bmi', [BMIcalculatorController::class, 'calculateBMIMetric']);
