<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diet extends Model
{
    use HasFactory;

    protected $table = 'diets';

    protected $fillable = [
        'name', 
        'protein', 
        'carbs', 
        'fats', 
        'calories'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    
}
