<?php

namespace App\Http\Controllers;

use App\Models\GrupoEmpresa;
use Illuminate\Http\Request;
use NunoMaduro\Collision\Adapters\Phpunit\State;

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

        $grupoEmpresa->save();

        return response(200);
    }

    function vistaRegistroGE(){
        return view('registroGE');
    }
}
