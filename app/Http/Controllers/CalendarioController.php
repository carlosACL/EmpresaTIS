<?php

namespace App\Http\Controllers;

use App\Models\Calendario;
use App\Models\Evento;
use Illuminate\Http\Request;

class CalendarioController extends Controller
{
    public function agregarEvento(Request $request)
    {
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
}
