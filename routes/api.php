<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Monster\MonsterController;
use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\User\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::prefix('monsters')->group(function(){
    Route::get('list', [MonsterController::class, 'list']);
    Route::get('info/{id}', [MonsterController::class, 'info']);
});

Route::prefix('category')->group(function(){
    Route::get('list', [CategoryController::class, 'list']);
    Route::get('info/{id}', [CategoryController::class,'info']);
});

Route::prefix('user')->group(function () {
    Route::post('login', [UserController::class, 'login']);
    Route::post('registration', [UserController::class, 'addNewUser']);
});
