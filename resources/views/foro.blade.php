@extends('templates.plantillaprincipal')

@section('titulo') 
    Seccion de Dudas
@endsection

@section('script')
<script>
    const token = sessionStorage.getItem('token');
    if(token){
        const data = new FormData();
        data.append('token', token);
        fetch("api/verificarSession", {
            method: 'POST',
            body:data
        }).then((response) => {
            return response.json();
        }).then((json) => {
            if(Object.keys(json).length < 1){
                sessionStorage.clear();
                location.replace('Login');
            }
        });
    } else {
        location.replace('Login');
    }
    
</script>
@endsection

@section('contenido')
    <div id="dudas"></div>
@endsection