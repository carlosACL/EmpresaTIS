<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'Usuario';
    protected $primaryKey = 'idUsuario';
    protected $fillable = ['idGE','nombre','email','telefono','codSis',
                                'foto_perfil','nombreUsuario','contrasenia', 
                                        'idCarrera', 'tipoUsuario', 'idGrupo'];

    public $timestamps = false;
}
