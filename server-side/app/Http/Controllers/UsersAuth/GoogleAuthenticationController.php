<?php

namespace App\Http\Controllers;

use App\Models\User;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthenticationController extends Controller
{
    public function redirectToProvider()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleProviderCallback()
    {
        $user = Socialite::driver('google')->user();

        // check if the user already exists 
        $exstitingUser = User::firstWhere('email', $user->getEmail());  
        
        if($exstitingUser) {
            auth()->login($exstitingUser);
        }else{
            // Create new user 
            $newUser = User::create([
                'name' => $user->getName(),
                'email'=> $user->getEmail(),
                'password' =>  ''
            ]);
            //Log in the new user 
            if(auth()->login($newUser)){
                return response()->json(['Message' => 'User is logged in!'], 200);
            };

            
        }
    }
}
