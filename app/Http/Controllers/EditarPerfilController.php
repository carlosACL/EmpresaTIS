<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EditarPerfilController extends Controller
{
    public function modificarDatos (Request $request) {
        $id = DB::table('Session')->select('idUser')->where('token', '=', $request->token)->first();
        $usuario = Usuario::find($id->idUser);
        $usuario->nombre = $request->nombre;
        $usuario->apellido = $request->apellido;
        $usuario->email = $request->email;
        $usuario->telefono = $request->telefono;
        $usuario->codSis = $request->codSis;
        $usuario->save();

        return response(20);
    }
}
