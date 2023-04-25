<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercice extends Model
{
    use HasFactory;

    protected $fillable = ['exercice_name' ,'exercice_sets','exercice_repetition','exercice_image','exercice_category'];
}
