<?php

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

<<<<<<< HEAD
Route::get('/RegistroGE', function(){
    return view('registroGE');
});
=======
//use app/Http

//Route::get('/',[nuevoControlador::class,"inicio"]);
>>>>>>> dc49b207a0820db76076f64288320fb8e225d53d
