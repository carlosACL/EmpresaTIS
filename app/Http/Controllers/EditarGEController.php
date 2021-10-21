<?php

namespace App\Http\Controllers;

use App\Models\GrupoEmpresa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use NunoMaduro\Collision\Adapters\Phpunit\State;

class RegistroGEController extends Controller
{
    function EditarGrupoEmpresa(Request $req){

              return response(200);
    }

    function verificarNombre(request $req){
        $response = DB::table('Grupo_Empresa')->select($req->campo)->where($req->campo,'=',$req->nombre)->first();

        return response()->json(($response) ? ['nombre' => 'false']:['nombre' => 'true']);
    }

    function vistaEditarGE(){
        return view('editarGE');
    }
}
