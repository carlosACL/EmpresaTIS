<?php

namespace App\Http\Controllers;

use App\Models\Calendario;
use App\Models\Evento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CalendarioController extends Controller
{
    public function agregarEvento(Request $request){
        $calendario = Calendario::findOrFail($request->idCalendario);
        $evento = new Evento();
        $evento->idCalendario = $request->idCalendario;
        $evento->nombre = $request->nombre;
        $evento->fecha_creacion = date("Y-m-d");
        $evento->fecha_inicio = $request->fecha_inicio;
        $evento->fecha_final = $request->fecha_final;

        $evento->save();

        return response(200);
    }

    public function obtenerEventos(Request $request){
        $calendario = Calendario::findOrFail($request->idCalendario);
        $eventos = DB::table('Evento')
                        ->select('*')
                        ->join('Calendario','Calendario.idCalendario','=','Evento.idCalendario')
                        ->orderBy('fecha_inicio', 'ASC')
                        ->get();
        return response()->json($eventos);
    }
}
