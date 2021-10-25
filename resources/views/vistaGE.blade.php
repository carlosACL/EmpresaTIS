@extends('templates.plantillaprincipal')

@section('titulo')
    GE-{{$nombre}}
@endsection

@section('contenido')
    <script>
        const datos = {
            nombre :          '<?= $nombre ?>',
            nombreAb :        '<?= $nombreAb ?>',
            logo :            '<?= $logo ?>',
            fecha_creacion :  '<?= $fecha_creacion ?>',
            direccion :       '<?= $direccion ?>',
            descripcion:      '<?= $descripcion ?>',
            email :           '<?= $email ?>',
            telefono :        '<?= $telefono ?>',
            orgJur :          '<?= $orgJur ?>',
        };
    </script>
    <div id='vistaGE'></div>
@endsection