<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsuarioTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return DB::table('Usuario')->insert([
            [
                "idUsuario" => "1",
                "nombre" => "Lionel",
                "apellido" => "Perez Calvin",
                "email" => "201400001@est.umss.edu",
                "telefono" => "75845785",
                "codSis" => "201400001",
                "foto_perfil" => "1636248844_messiPelon.jpg",
                "nombreUsuario" => "messientocalvo",
                "contrasenia" => "calvo123",
                "idCarrera" => "1",
                "idGrupo" => "1",
                "tipoUsuario" => "admin"
            ],
            [
                "idUsuario" => "2",
                "nombre" => "Henry Jaruslav",
                "apellido" => "Mamani Cespedes",
                "email" => "201400002@est.umss.edu",
                "telefono" => "78451313",
                "codSis" => "201400002",
                "foto_perfil" => "1636248902_gigachad.jpg",
                "nombreUsuario" => "mamani123",
                "contrasenia" => "elhenry",
                "idCarrera" => "2",
                "idGrupo" => "2",
                "tipoUsuario" => ""
            ],
            [
                "idUsuario" => "3",
                "nombre" => "Margarita Villaroel Perez",
                "apellido" => "Villaroel Perez",
                "email" => "201400003@est.umss.edu",
                "telefono" => "79868564",
                "codSis" => "201400003",
                "foto_perfil" => "1636249064_woman.jpg",
                "nombreUsuario" => "margarita456",
                "contrasenia" => "villaroel456",
                "idCarrera" => "1",
                "idGrupo" => "3",
                "tipoUsuario" => ""
            ],
            [
                "idUsuario" => "4",
                "nombre" => "Perez",
                "apellido" => "Villaroel",
                "email" => "201400003@est.umss.edu",
                "telefono" => "79868564",
                "codSis" => "201400003",
                "foto_perfil" => "1636249064_woman.jpg",
                "nombreUsuario" => "margarita456",
                "contrasenia" => "villaroel456",
                "idCarrera" => "1",
                "idGrupo" => "1",
                "tipoUsuario" => ""
            ],
            [
                "idUsuario" => "5",
                "nombre" => "Perez jorge",
                "apellido" => "Villaroel rata",
                "email" => "201400003@est.umss.edu",
                "telefono" => "79868564",
                "codSis" => "201400003",
                "foto_perfil" => "1636249064_woman.jpg",
                "nombreUsuario" => "margarita456",
                "contrasenia" => "villaroel456",
                "idCarrera" => "1",
                "idGrupo" => "1",
                "tipoUsuario" => ""
            ],
            [
                "idUsuario" => "6",
                "nombre" => "Perez  roca",
                "apellido" => "Villaroel ramirez",
                "email" => "201400003@est.umss.edu",
                "telefono" => "79868564",
                "codSis" => "201400003",
                "foto_perfil" => "1636249064_woman.jpg",
                "nombreUsuario" => "margarita456",
                "contrasenia" => "villaroel456",
                "idCarrera" => "1",
                "idGrupo" => "3",
                "tipoUsuario" => ""
            ]
        ]);
    }
}
