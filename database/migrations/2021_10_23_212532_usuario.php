<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Usuario extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Usuario', function(Blueprint $table){
            $table->id('idUsuario')->autoIncrement();
            $table->unsignedInteger('idGE')->nullable();
            $table->foreign('idGE')->references('idGE')->on('Grupo_Empresa');
            $table->string('nombre');
            $table->string('apellido');
            $table->string('email');
            $table->integer('telefono');
            $table->string('codSis');
            $table->string('foto_perfil');
            $table->string('nombreUsuario');
            $table->string('contrasenia');
            $table->string('tipoUsuario');
            $table->unsignedInteger('idCarrera');
            $table->foreign('idCarrera')->references('idCarrera')->on('Carrera');
            $table->unsignedInteger('idGrupo');
            $table->foreign('idGrupo')->references('idGrupo')->on('Grupo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Usuario');
    }
}
