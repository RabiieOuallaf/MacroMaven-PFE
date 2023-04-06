<?php

    namespace Database\Factories;

    use App\Http\Controllers\UsersAuth\EmailAuthenticationController;

    class AuthenticationFactory
    {
        public static function create(string $type)
        {
            // switch the auth based on the passed params in the auths controllers
            switch($type) {
                case 'email':
                    return new EmailAuthenticationController();
                    break;
                default:
                    return response()->json("Service doesn't exsit yet!");
                    break;
            }    
        }
    }