<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GrupoEmpresa;
use Illuminate\Support\Facades\DB;
use Nette\Utils\Json;

class EditarGEController extends Controller
{
    function registrarCambiosGE(Request $req)
    {

        $grupoEmpresa = GrupoEmpresa::find($req->id);
        //$grupoEmpresa = GrupoEmpresa::where($req->campo, '=', $req->nombre);
        //$grupoEmpresa = new GrupoEmpresa;
        $grupoEmpresa->nombre = $req->nombre;
        $grupoEmpresa->nombreAb = $req->nombreAb;
        $grupoEmpresa->direccion = $req->direccion;
        $grupoEmpresa->email = $req->email;
        $grupoEmpresa->telefono = $req->telefono;
        $grupoEmpresa->orgJur = $req->orgJur;
        $grupoEmpresa->descripcion = $req->descripcion;

        $file = $req->file('imagen');
        $nombre =  time() . "_" . $file->getClientOriginalName();
        $file->move('resources', $nombre);
        $grupoEmpresa->logo = $nombre;

        $grupoEmpresa->save();

        //return response()->json($grupoEmpresa);

        return response(200);
    }

    function solicitarGE(request $req)
    {
        //$socios = DB::table('socio')->get();
        //return response()->json($socios);

        //$response = DB::table('Grupo_Empresa')->select('nombre', 'nombreAb', 'logo', 'fecha_creacion', 'fecha_registro', 'direccion', 'descripcion', 'email', 'telefono', 'orgJur')->get();
        $response = DB::table('Grupo_Empresa')->get();
        return response()->json($response);
    }


    function index()
    {

        //return View::make('gameworlds.mygame', compact('fixtures'), compact('teams'), compact('selections'));
        //return $datos;
        return view('editarGE');
        //return Route::get('/EditarGE',[EditarGEController::class, 'index']);
    }
}
