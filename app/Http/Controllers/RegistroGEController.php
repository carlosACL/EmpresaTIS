<?php

namespace App\Http\Controllers;

use App\Models\GrupoEmpresa;
use App\Models\socio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use NunoMaduro\Collision\Adapters\Phpunit\State;
use App\Models\Usuario;

class RegistroGEController extends Controller
{
    function RegistrarGrupoEmpresa(Request $req){
        $grupoEmpresa = new GrupoEmpresa;

        $grupoEmpresa->nombre = $req->nombre;
        $grupoEmpresa->nombreAb = $req->nombreAb;
        $grupoEmpresa->fecha_registro = $req->fecha_registro;
        $grupoEmpresa->fecha_creacion = date("Y-m-d");
        $grupoEmpresa->direccion = $req->direccion;
        $grupoEmpresa->email = $req->email;
        $grupoEmpresa->telefono = $req->telefono;
        $grupoEmpresa->orgJur = $req->orgJur;
        $grupoEmpresa->descripcion = $req->descripcion;

        $file = $req->file('imagen');
        $nombre =  time()."_".$file->getClientOriginalName();
        $file->move('resources', $nombre);
        $grupoEmpresa->logo = $nombre;

        $id = DB::table('Session')->select('idUser')->where('token', '=', $req->token)->first();
        $grupoEmpresa->duenio = $id->idUser;

        $grupoEmpresa->save();

        
        $idge = DB::table('Grupo_Empresa')->select('idGE')->where('nombre', '=', $grupoEmpresa->nombre)->first();
        $us = Usuario::find($id->idUser);
        $us->idGE = $idge->idGE;
        $us->save();
        return response(20);
    }

    function verificarNombre(request $req){
        $response = DB::table('Grupo_Empresa')->select($req->campo)->where($req->campo,'=',$req->nombre)->first();

        return response()->json(($response) ? ['nombre' => 'false']:['nombre' => 'true']);
    }

    function vistaRegistroGE(){
        return view('registroGE');
    }

    function vistaGE($nombre) {
        $ge = DB::table('Grupo_Empresa')->where('nombre','=',$nombre)->first();
        if(!empty((array) $ge)){
            $datos = [
                'nombre' => $ge->nombre,
                'nombreAb' => $ge->nombreAb,
                'logo' => $ge->logo,
                'fecha_creacion' => $ge->fecha_creacion,
                'direccion' => $ge->direccion,
                'descripcion' => $ge->descripcion,
                'email' => $ge->email,
                'telefono' => $ge->telefono,
                'orgJur' => $ge->orgJur,
                'duenio' => $ge->duenio
            ];
            return view('vistaGE')->with($datos);
        }
        return view('login')->with(['msg' => $nombre]);
    }

    function obtenerSocios(Request $req){
        $datoGE = DB::table('Grupo_Empresa')->select('idGE', 'duenio')->where('nombre', '=',$req->nombre)->first();
        $usuarios = DB::table('Usuario')->select('idUsuario','nombre', 'apellido', 'foto_perfil')->where('idGE','=',$datoGE->idGE)->get();

        $data = [
            'socios' => $usuarios,
            'lider' => $datoGE->duenio,
        ];

        return response()->json($data);
    }

    function expulsarSocio(Request $req){
        $user = Usuario::find($req->id);
        $user->idGE = null;
        $user->save();
        return response(200);
    }

    function obtenerUsuariosG(Request $req){
        $user = Usuario::find($req->id);
        $usuarios = DB::table('Usuario')
                    ->select('nombre','apellido' ,'foto_perfil', 'idUsuario')
                    ->where('idGrupo', '=',$user->idGrupo)
                    ->where('idUsuario', '<>', $req->id)
                    ->get();


        return response()->json($usuarios);
    }
}
