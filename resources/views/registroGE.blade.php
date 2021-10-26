@extends('templates.plantillaprincipal')

@section('titulo') 
    Registro Grupo Empresa
@endsection

@section('script')
    <script>
        if(!sessionStorage.getItem('token')){
            location.replace('Login');
        }
    </script>
@endsection

@section('contenido')
    <div id='regGE'></div>
@endsection