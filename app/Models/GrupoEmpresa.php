<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GrupoEmpresa extends Model
{
    protected $table = 'Grupo_Empresa';
    protected $atributes = ['idGE', 'fecha_creacion', 'fecha_registro',
                             'orgJur', 'nombre', 'nombreAv', 'telefono',
                             'direccion','email', 'objetivo','urlImg'];

}
        
