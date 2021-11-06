import { useState, useRef, useEffect } from 'react'
import { BotonStyled, InputBuscador } from '../../elementos/TabGE';
import CajaBuscador from './CajaBuscador';

const Buscador = () => {
    const [input , setInput] = useState("");
    const [usuarios, setUsuarios] = useState(null);
    const [filtrados, setFiltrados]= useState(null);

    const ref = useRef();
    const result = useRef(null);

    const mandarInvitacion = () => {
        const users = usuarios.filter((data) => (data.nombre+" "+data.apellido).toLowerCase() == input.toLowerCase());
        console.log(users);
        if(users.length==1){
            const data = new FormData();
            data.append('destino', users[0].idUsuario);
            data.append('sender',sessionStorage.getItem('id'));
            fetch('api/mandarInvitacion', {
                method : 'POST',
                body: data
            }).then((response) => response.json()).then((json) => {
                const respuesta = json.respuesta;
                if(respuesta == 'tieneGE'){
                    alert("El usuario ya pertenece a una Grupo Empresa");
                } else if (respuesta == "yaMandado"){
                    alert("Ya mandaste una invitacion al usuario");
                } else {
                    //acciones para mostrar pendientes
                    alert("Enviado con exito");
                }
            });
        } else {
            alert("El usuario no existe o no pertenece a tu grupo");
        }
    }

    const onChange = () => {
        if(ref.current.value != ' '){
            setInput(ref.current.value);
            if(ref.current.value.length > 0){
                const filt = usuarios.filter((dato) => 
                (dato.nombre.toLowerCase()+" "+dato.apellido.toLowerCase()).includes(ref.current.value.toLowerCase()));
                setFiltrados(filt);
            } else {
                setFiltrados(null);
            }
        }
     }

    const buscadorOnFocus = () => {
        result.current.style = "display:block;";
    }

    const buscadorOnBlur = () => {
        setTimeout(() => result.current.style = "display:none",100);
    }

    const autoCompletar = (setValor, nombre) => {
        setValor(nombre);
        result.current.style = "display:none";
    }

    useEffect(() => {
        const data = new FormData();
        data.append('id', sessionStorage.getItem('id'));
        fetch('api/obtenerUsuariosG', {
            method: 'POST',
            body: data
        }).then((response) => response.json()).then((json) => {
            setUsuarios(json);
        }); 
    }, [])

    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className= ' d-block' onBlur = { buscadorOnBlur }>
                    <InputBuscador value={ input } 
                                   ref = { ref } 
                                   type='search' 
                                   onChange = { onChange }
                                   onFocus = { buscadorOnFocus }/>
                    <div ref = { result } 
                         onMouseOver={ buscadorOnFocus }>
                        {(<div  className=' position-absolute' 
                                style = {{width: '300px'}}
                                ref = { result }>
                            {(filtrados) && (filtrados.map((data) => <CajaBuscador nombre = {data.nombre+" "+data.apellido} 
                                                                                   imagen = {data.foto_perfil}
                                                                                   evento = { autoCompletar }
                                                                                   setValor = { setInput }/>))}
                        </div>)}
                    </div>
                </div>
                <BotonStyled type='button' onClick= { mandarInvitacion }>Invitar</BotonStyled>
            </div>  
        </>
    )
}

export default Buscador;