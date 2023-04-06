<?php 
    use Illuminate\Support\Facades\Route;
    use App\Http\Controllers\UsersAuth\AuthController;


    /* ==That's a costumed routes file that will be manage all routes thie authentication service ==*/

    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);