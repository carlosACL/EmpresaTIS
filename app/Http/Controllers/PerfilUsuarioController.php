<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\socio;
use Illuminate\Support\Facades\DB;

class PerfilUsuarioController extends Controller
{
    public function index($id){
        return view('perfilUsuario');
    }

    public function show($id)
    {
        //funcionalidad que devuelve los datos del id
        return view('perfilUsuario',['id' => $id]);
    }

    public function obtenerDatos(request $dato){
        $datos = ['nombre' => 'juan'];
        return response()->json($datos);
    }

    public function obtenerSocio()
    {
       $socios = DB::table('socio')->get();
       return response()->json($socios);
    }

    public function obtenerCarrera()
    {
       $carreras = DB::table('carrera')->get();
       return response()->json($carreras);
    }

    public function obtenerGrupo()
    {
       $grupos = DB::table('grupo')->get();
       return response()->json($grupos);
    }
}
