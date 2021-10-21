<?php

use App\Http\Controllers\RegistroGEController;
use App\Http\Controllers\EditarGEController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/RegistroGE', function(){
    return view('registroGE');
});

Route::get('/RegistroGE',[RegistroGEController::class, 'vistaRegistroGE']);

Route::get('/EditarGE', function(){
    return view('editarGE');
});

//Route::get('/EditarGE',[EditarGEController::class, 'vistaEditarGE']);
