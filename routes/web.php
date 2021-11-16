<?php

use App\Http\Controllers\EspacioGeneralController;
use App\Http\Controllers\FundaEmpresaController;
use App\Http\Controllers\RegistroGEController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PerfilUsuarioController;
use App\Http\Controllers\LoginController;

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

Route::get('/Socio{id}', [PerfilUsuarioController::class, 'show']);


Route::get('/RegistroGE',[RegistroGEController::class, 'vistaRegistroGE'])->name('registroGE');


Route::get('/Login', [LoginController::class, 'vistaLogin']);


Route::get('/FundaEmpresa', [FundaEmpresaController::class, 'vistaFundaEmpresa']);
Route::post('/import-list-excel' ,[FundaEmpresaController::class, 'importExcel'] )   ->name ('users.import.excel');
Route::get('/EspacioGeneral', [EspacioGeneralController::class, 'vistaEspacioGeneral']);