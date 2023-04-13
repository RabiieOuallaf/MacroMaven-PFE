<?php 

namespace App\Interfaces;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

interface BMICalculatorServiceInterface { 
    static public function calculateBMIMetric(Request $request) : JsonResponse;   
}