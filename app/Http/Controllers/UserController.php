<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\session;
use Illuminate\Support\Facades\DB;
use App\Models\Usuario;
use App\Models\GrupoEmpresa;
use App\Models\Invitacion;

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

    //destino = id del usuario
    //sender = id del usuario que envio el mensaje
    function mandarInvitacion(Request $req){
        $sender = DB::table('Usuario')
                        ->where('idUsuario', '=', $req->sender)
                        ->first();
        $usuario = DB::table('Usuario')
                        ->where('idUsuario', '=', $req->destino)
                        ->first();
        $ge = GrupoEmpresa::find($sender->idGE);
        if($usuario->idGrupo == $sender->idGrupo){
            if(!$usuario->idGE){
                $inv = DB::table('Invitacion')
                            ->where('sender', '=' , $sender->idUsuario)
                            ->where('idUsuario','=', $usuario->idUsuario)
                            ->first();
                if(empty($inv)){
                    $invitacion = new Invitacion;
                    $invitacion->idGE = $ge->idGE;
                    $invitacion->idUsuario = $usuario->idUsuario;
                    $invitacion->sender = $sender->idUsuario;
                    $invitacion->save();
                    return response()->json(['respuesta'=>'exito']);
                } else {
                    return response()->json(['respuesta'=>'yaMandado']);
                }
            } else {
                return response()->json(['respuesta' => 'tieneGE']);
            }
        } else {
            return response()->json(['respuesta' => 'grupoDiferente']);
        }
        
        //verificar que no haya mandado previamente ya invitacion
        //Mandar Invitacion
    }
}
