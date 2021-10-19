<?php

use App\Http\Controllers\RegistroGEController;
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

Route::get('/RegistroGE',[RegistroGEController::class, 'vistaRegistroGE']);
=======
Route::get('/RegistroGE',[RegistroGEController::class, 'vistaRegistroGE'])->name('registroGE');
>>>>>>> 9f7752b509b1dd57ab18c2713c2668664035664e
