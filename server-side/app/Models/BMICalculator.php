<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BMICalculator extends Model
{
    use HasFactory;

    public function bmi() {
        return $this->belongsTo(BMI::class);        
    }
}
