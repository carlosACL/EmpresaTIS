<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EspacioDeAsesoramientoController extends Controller
{
    public function viewEspAsesoramiento($id){
        return view('espacioDeAsesoramiento')->with(compact('id'));
    }
    /*
        nombreGE
    */
    public function obtenerCarpetasBasicas(Request $req){
        $GE = DB::table('Grupo_Empresa')
                    ->where('nombre', '=', $req->nombreGE)
                    ->first();
        $carpetas = DB::table('Elemento')
                            ->where('idGE', '=', $GE->idGE)
                            ->whereNull('idPadre')
                            ->get();
        $arbolDatos = $this->buscarHijos($carpetas);
        return response()->json($arbolDatos);
    }

    private function buscarHijos($datos){
        $response = [];
        foreach ($datos as $key) {
            array_push($response, $this->appendHijos($key));
        }
        return $response;
    }

    private function appendHijos($datos){
        $hijos = DB::table('Elemento')
                        ->where('idPadre', '=',$datos->idElemento)
                        ->get();
        
        if(!empty($hijos)){
            $hijosHijos = $this->buscarHijos($hijos);
            $dato = ((array) $datos);
            $dato['hijos'] = $hijosHijos;
            return (Object)$dato; 
        }   

        return $datos;
    }
}
