<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class GrupoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return \DB::table('Grupo')->insert([
            [
                "idGrupo" => "1",
                "nomGrupo" => "Flores Villaroel Corina Justina"
            ],
            [
                "idGrupo" => "2",
                "nomGrupo" => "Blano Coca Leticia"
            ],
            [
                "idGrupo" => "3",
                "nomGrupo" => "Rodriguez Bilbao Patricia Erika"
            ]
        ]);
    }
}
