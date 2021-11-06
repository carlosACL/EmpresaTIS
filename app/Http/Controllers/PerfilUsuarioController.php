<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
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

    public function obtenerUsuario(Request $request) {
        $usuario = Usuario::find($request->id);
        $carrera = DB::table('Carrera')->select('nomCarrera')->where('idCarrera','=',$usuario->idCarrera)->first();
        $grupo = DB::table('Grupo')->select('nomGrupo')->where('idGrupo','=',$usuario->idGrupo)->first();
        $datos = [$usuario, $carrera, $grupo];
        return response()->json($datos);
    }

    public function obtenerUsuarios() {
        $usuarios = DB::table('Usuario')->get();
        return response()->json($usuarios);
    }
}
