<?php 

namespace App\Interfaces;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

interface BMICalculatorServiceInterface { 
    static public function calculateBMIMetric(float $height, float $weight, string $gender) : float;   
}