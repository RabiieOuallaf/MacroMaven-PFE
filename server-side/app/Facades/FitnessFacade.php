<?php 

namespace App\Facades;

use Illuminate\Support\Facades\Facade;


class FitnessFacade extends Facade
{
    protected static function getFacadeAccessor() 
    {
        return 'fitness'; 
    }
}