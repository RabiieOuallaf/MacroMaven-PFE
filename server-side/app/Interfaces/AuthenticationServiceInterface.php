<?php 

namespace App\Interfaces;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

interface AuthenticationServiceInterface {
    /**
        * Authenticates the user and returns a token if successful.
        * @param array $credentials The user's credentials.
        * @return string|null The authentication token, or null if authentication failed.
     */
     static public function register(Request $request): ?JsonResponse;

     static public function login(Request $request): ?JsonResponse;

}
