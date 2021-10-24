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
            $table->unsignedInteger('idGE');
            $table->foreign('idGE')->references('idGE')->on('Grupo_Empresa');
            $table->string('nombre');
            $table->string('email');
            $table->integer('telefono');
            $table->string('ci');
            $table->string('foto_perfil');
            $table->string('nombreUsuario');
            $table->string('contrasenia');
            $table->unsignedInteger('idCarrera');
            $table->foreign('idCarrera')->references('idCarrera')->on('Carrera');
            $table->string('tipoUsuario');
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