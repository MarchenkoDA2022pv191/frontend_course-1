<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $email = $request->get('email');
        $password = $request->get('password');

        // проверка авторизованного пользователя
        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            $user = Auth::user();
            return $user;
        }

       
    }


    public function addNewUser(Request $request)
    {
        $name = $request->get('name');
        $email = $request->get('email');
        $password = $request->get('password');

        // проверка авторизованного пользователя
        if (Auth::attempt(['email' => $email])) {
            throw new NotFoundHttpException('Аккаунт с такой почтой уже есть');
        }

        DB::table('users')->insertGetId(['name'=> $name, 'email' => $email, 'password' => $password ]);

    }
}



