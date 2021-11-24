<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMensajeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mensaje', function (Blueprint $table) {
            $table->id("idMensaje")->autoIncrement();
            $table->integer("idUsuario");
            $table->foreign('idUsuario')->references('idUsuario')->on('Usuario');
            $table->integer("idMensajePadre")->nullable();
            $table->date("fechaMensaje");
            $table->foreign('idMensajePadre')->references('idMensaje')->on('mensaje');
            $table->string("mensaje");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mensaje');
    }
}
