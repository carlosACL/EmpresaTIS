@extends('templates.plantillaprincipal')

@section('titulo') 
    Perfil Usuario
@endsection

@section('contenido')
<div id="perfil"></div>
        
<script>
    const idUsuario = '<?= $id?>';
</script>
@endsection