<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
    Route::get('list', [App\Http\Controllers\Monster\MonsterController::class, 'list']);
    Route::get('info/{id}', [App\Http\Controllers\Monster\MonsterController::class, 'info']);
});