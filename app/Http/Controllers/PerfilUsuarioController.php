<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\socio;
use Illuminate\Support\Facades\DB;

class PerfilUsuarioController extends Controller
{
    public function index(){
        $data = DB::table('socio')->get();
        return $data;
    }
}
