<?php

namespace App\Providers;

use App\Services\FitnessService;
use Illuminate\Support\ServiceProvider;

class FitnessServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('fitness' , function($app) {
            return new FitnessService;
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
