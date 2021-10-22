<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GrupoEmpresa;
use Illuminate\Support\Facades\DB;

class EditarGEController extends Controller
{
    function GuardarCambiosGrupoEmpresa(Request $req)
    {
        //$grupoEmpresa = GrupoEmpresa::find(1);
        echo ("como quieres ser mi amiga");
        //$grupoEmpresa = GrupoEmpresa::where($req->campo, '=', $req->nombre);

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
        $nombre =  time() . "_" . $file->getClientOriginalName();
        $file->move('resources', $nombre);
        $grupoEmpresa->logo = $nombre;

        $grupoEmpresa->save();

        return response(200);
    }

    function verificarNombre(request $req)
    {
        $response = DB::table('Grupo_Empresa')->select($req->campo)->where($req->campo, '=', $req->nombre)->first();

        return response()->json(($response) ? ['nombre' => 'false'] : ['nombre' => 'true']);
    }

    function index()
    {
        $datos = DB::table('Grupo_Empresa')->select('nombre', 'nombreAb', 'logo', 'fecha_creacion', 'fecha_registro', 'direccion', 'descripcion', 'email', 'telefono', 'orgJur')->get();

        //return View::make('gameworlds.mygame', compact('fixtures'), compact('teams'), compact('selections'));
        //return $datos;
        return view('editarGE', $datos);
        //return Route::get('/EditarGE',[EditarGEController::class, 'index']);
    }
}
