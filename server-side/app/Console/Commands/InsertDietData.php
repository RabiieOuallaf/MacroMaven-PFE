<?php

namespace App\Console\Commands;

use App\Models\Diet;
use Illuminate\Console\Command;

class InsertDietData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'insert:diet-data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Inserts diet data into the database.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $keto = new Diet;
        $keto->name = 'Keto';
        $keto->protein = 93;
        $keto->carbs = 167;
        $keto->fats = 75;
        $keto->calories = 1650;
        $keto->save();
        
        $mediterranean = new Diet;
        $mediterranean->name = 'Mediterranean';
        $mediterranean->protein = 75;
        $mediterranean->carbs =150;
        $mediterranean->fats = 67;
        $mediterranean->calories = 1800;
        $mediterranean->save();
        
        $dash = new Diet;
        $dash->name = 'DASH';
        $dash->protein = 75;
        $dash->carbs = 210;
        $dash->fats = 42;
        $dash->calories = 2000;
        $dash->save();
        
        $atkins = new Diet;
        $atkins->name = 'Atkins';
        $atkins->protein = 112;
        $atkins->carbs = 20;
        $atkins->fats = 112;
        $atkins->calories = 1800;
        $atkins->save();
        
        $hmr = new Diet;
        $hmr->name = 'HMR';
        $hmr->protein = 150;
        $hmr->carbs =  120;
        $hmr->fats = 25;
        $hmr->calories = 1200;
        $hmr->save();
        
        $optifast = new Diet;
        $optifast->name = 'Optifast';
        $optifast->protein = 100;
        $optifast->carbs = 60;
        $optifast->fats = 4;
        $optifast->calories = 800;
        $optifast->save();

        $optifast = new Diet;
        $optifast->name = 'Paleo';
        $optifast->protein = 160;
        $optifast->carbs = 260;
        $optifast->fats = 110;
        $optifast->calories = 2670;
        $optifast->save();
    }

}
