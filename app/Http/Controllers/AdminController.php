<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function getView($id){
        $usuario = DB::table('Usuario')
                        ->join('Rol', 'Rol.idRol', '=', 'Usuario.idRol')
                        ->where('Usuario.idUsuario', '=', $id)
                        ->first();
        if(isset($usuario->idUsuario) && $usuario->nombreRol == 'Administrador'){
            return view('ventanaAdmin')->with(compact('id'));  
        } else {
            return view('login');
        }  
    }

    public function getUsuarios(){
        $usuarios = DB::table('Usuario')
                            ->leftJoin('Rol', 'Rol.idRol', '=', 'Usuario.idRol')
                            ->get();
        return response()->json($usuarios);
    }

    /**
     * idUsuario = el usuario que tendra un nuevo rol
     * nombreRol = el rol que se le otorgara
     */
    public function actualizarRol(Request $req){
        $usuario = Usuario::find($req->idUsuario);
        $rol = DB::table('Rol')
                    ->where('nombreRol', '=', $req->nombreRol)
                    ->first();

        $usuario->idRol = $rol->idRol;
        $usuario->save();
        return response(200);
    }

    public function getFullUser(Request $req){
        $usuario = DB::table('Usuario')
                        ->leftJoin('Rol','Rol.idRol','=','Usuario.idRol')
                        ->where('idUsuario','=',$req-> idUsuario)
                        ->first();
        return response()-> json($usuario);
    }
}


