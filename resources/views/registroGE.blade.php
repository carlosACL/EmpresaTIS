@extends('templates.plantillaprincipal')

@section('titulo') 
    Registro Grupo Empresa
@endsection

@section('session')
      
@endsection

@section('contenido')
    <script>
        if(!sessionStorage.getItem('userSession')){
            window.location.replace({{ route('inicio')}});
            console.log("pasa por aqui");
        }    
    </script>  

    <div id='regGE'></div>
@endsection
    
    
   
