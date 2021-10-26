@extends('templates.plantillaprincipal')

@section('titulo') 
    Login
@endsection

@section('script')
    <script>
        if(sessionStorage.getItem('token')){
            location.replace('/');
        }
    </script>
@endsection

@section('contenido')
    <div id="login"></div>
@endsection