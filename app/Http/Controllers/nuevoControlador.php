<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class nuevoControlador extends Controller
{
    function inicio(){
        return view("welcome");
    }
}