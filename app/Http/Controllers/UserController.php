<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\session;
use Illuminate\Support\Facades\DB;
use App\Models\Usuario;
use App\Models\GrupoEmpresa;

class UserController extends Controller
{
    function createSession(Request $request){ //require el id del
        $session = new session;
        $session->token = md5(uniqid(rand(), true)); 
        $session->idUser = $request->idUser;

        $session->save();

        $ge = Usuario::find($request->idUser);
        $nombre = GrupoEmpresa::find($ge->idGE);
        $resp = [
            'token' => $session->token,
            'nombre' => (!empty($nombre)) ? $nombre->nombre:'',
        ];

        return response()->json($resp);
    }

    function dropSession(Request $request){//require el token
        $id = DB::table('Session')->where('token', $request->token)->first();
        if($id){session::destroy($id->idSession);}
        return response()->json($id);
    }

    function verifySession(Request $request){//verifica si el token existe y devuelve el idUser
        $id = DB::table('Session')->select('idUser')->where('token', $request->token)->first();
        return response()->json($id);
    }

    function getNombre(Request $req){
        $dat = Usuario::find($req->id);
        return response()->json(['nombre' => $dat->nombre]);
    }
}
