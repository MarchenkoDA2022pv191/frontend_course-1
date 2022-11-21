<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
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
        throw new NotFoundHttpException('Неверный логин и пароль');
       
    }


    public function addNewUser(Request $request)
    {
        $name = $request->get('name');
        $email = $request->get('email');
        $password = $request->get('password');

        // проверка авторизованного пользователя
        if (Auth::attempt(['email' => $email])) {
            throw new NotFoundHttpException("aboba");
        }
        else{
            User::create([
                'name' => $name,
                'email' => $email,
                'password' => Hash::make($password),
            ]);
            if (Auth::attempt(['email' => $email, 'password' => $password])) {
                $user = Auth::user();
                return $user;
            }
            else{
                $user = Auth::user();
                return $user;
            }
        }
    }
}



