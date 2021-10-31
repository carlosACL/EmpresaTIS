@extends('templates.plantillaprincipal')

@section('titulo') 
    Registro Grupo Empresa
@endsection

@section('script')
<script>
    const isSessionActive = async () => {
        const token = sessionStorage.getItem('token');
        if(token){
            const data = new FormData();
            data.append('token', token);
            const data1 = await fetch("api/verificarSession", {
                method: 'POST',
                body:data
            }).then((response) => {
                return response.json();
            });
            if(Object.keys(data1).length > 0){
                return true;
            } else {
                sessionStorage.clear();
                return false;
            }
        }
        return false;
    };

    isSessionActive().then((resp) => {
        if(!resp){
            location.replace('Login');
        }
    })
</script>
@endsection

@section('contenido')
    <div id='regGE'></div>
@endsection