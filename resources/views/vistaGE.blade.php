@extends('templates.plantillaprincipal')

@section('titulo')
    GE-{{$nombre}}
@endsection

@section('contenido')
    <script>
        const nombre = '<?= $nombre ?>'
    </script>
    <div id='vistaGE'></div>
@endsection