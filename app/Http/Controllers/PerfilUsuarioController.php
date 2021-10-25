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
        $existeUsuario = DB::table('Usuario')->where('idUsuario',$id)->exists();
        if ($existeUsuario) {
            return view('perfilUsuario',['id' => $id]);
        } else {
            return view('404',['msg' => 'Usuario No Existe']);
        }
    }

    public function obtenerSocio()
    {
       $socios = DB::table('Usuario')->get();
       return response()->json($socios);
    }

    public function obtenerCarrera()
    {
       $carreras = DB::table('Carrera')->get();
       return response()->json($carreras);
    }

    public function obtenerGrupo()
    {
       $grupos = DB::table('Grupo')->get();
       return response()->json($grupos);
    }
}
