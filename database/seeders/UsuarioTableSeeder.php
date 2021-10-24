<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsuarioTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return \DB::table('Usuario')->insert([
            [
                "idUsuario" => "1",
                "nombre" => "Lionel Perez Calvin",
                "email" => "201400001@est.umss.edu",
                "telefono" => "75845785",
                "codSis" => "12345678",
                "foto_perfil" => "juanperez.jpg",
                "nombreUsuario" => "messientocalvo",
                "contrasenia" => "calvo123",
                "idCarrera" => "1",
                "idGrupo" => "1",
                "tipoUsuario" => "admin"
            ],
            [
                "idUsuario" => "2",
                "nombre" => "Henry Mamani Cespedes",
                "email" => "201400002@est.umss.edu",
                "telefono" => "78451313",
                "codSis" => "23456789",
                "foto_perfil" => "henrymamani.jpg",
                "nombreUsuario" => "mamani123",
                "contrasenia" => "elhenry",
                "idCarrera" => "2",
                "idGrupo" => "2",
                "tipoUsuario" => ""
            ],
            [
                "idUsuario" => "3",
                "nombre" => "Margarita Villaroel Perez",
                "email" => "201400003@est.umss.edu",
                "telefono" => "79868564",
                "codSis" => "34567890",
                "foto_perfil" => "margaritavillaroel.jpg",
                "nombreUsuario" => "margarita456",
                "contrasenia" => "villaroel456",
                "idCarrera" => "1",
                "idGrupo" => "3",
                "tipoUsuario" => ""
            ]
        ]);
    }
}
