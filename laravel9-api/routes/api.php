<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\LoanController;
use App\Http\Controllers\Api\UsersController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// https://github.com/morenocartagena

Route::controller(BookController::class)->group(function(){
    Route::get('/books', 'index');
    Route::post('/book', 'store');
    Route::get('/book/{id}', 'show');
    Route::put('/book/{id}', 'update');  
    Route::delete('/book/{id}', 'destroy');  
});

Route::controller(LoanController::class)->group(function(){
    Route::get('/loans', 'index');
    Route::post('/loan', 'store');
    Route::get('/loan/{id}', 'show');
    Route::put('/loan/{id}', 'update');  
    Route::delete('/loan/{id}', 'destroy');  
});

Route::controller(UsersController::class)->group(function(){
    Route::get('/users', 'index');
    Route::post('/user', 'store');
    Route::get('/user/{id}', 'show');
    Route::put('/user/{id}', 'update');  
    Route::delete('/user/{id}', 'destroy');  
});
