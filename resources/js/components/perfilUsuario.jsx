import { useRef, useState, useEffect } from "react";
import IconoAtras from "./Svg/IconoAtras";
import Editar from "./Svg/IconoEditar";
import IconoGuardar from "./Svg/IconoGuardar";

const PerfilUsuario = () => {

    const datos = {
        id: idUsuario
    }

    const nombre = useRef(null);
    const apellido = useRef(null); 
    const carrera = useRef(null);
    const grupo = useRef(null);
    const correo = useRef(null); 
    const telefono = useRef(null);
    const codSis = useRef(null);
    const imagen = useRef(null);
    const [logo, setLogo] = useState("../resources/socios/");

    useEffect(() => {
        const datoID = new FormData();
        datoID.append('id',datos.id)

        fetch('/api/usuario',{
            method: 'POST',
            body: datoID
        })
        .then((response) => response.json())
        .then((datoUsuario) => {
            nombre.current.value = datoUsuario[0].nombre;
            apellido.current.value = datoUsuario[0].apellido;
            correo.current.value = datoUsuario[0].email;
            telefono.current.value = datoUsuario[0].telefono;
            codSis.current.value = datoUsuario[0].codSis;
            carrera.current.value = datoUsuario[1].nomCarrera;
            grupo.current.value = datoUsuario[2].nomGrupo;
            imagen.current.src = logo+datoUsuario[0].foto_perfil;
        })
    }, []);

    const [idDelLogueado, setIdDelLogueado] = useState('');
    const [edita, setEdita] = useState(false);
    const [editando, setEditando] = useState(false);

    useEffect(() => {
        setIdDelLogueado(sessionStorage.getItem('id'))
    }, []);

    useEffect(() => {
        setEdita(idDelLogueado == datos.id)
    }, [idDelLogueado]);
    

    const editarCampos = () => {
        setEditando(!editando);
        setEdita(false);
        document.getElementById('cmpNombre').disabled = false;
        document.getElementById('cmpApellido').disabled = false;
        document.getElementById('cmpCorreo').disabled = false;
        document.getElementById('cmpTelefono').disabled = false;
        document.getElementById('cmpCI').disabled = false;
    };

    const bloquearCampos = () => {
        setEditando(!editando);
        setEdita(true);
        document.getElementById('cmpNombre').disabled = true;
        document.getElementById('cmpApellido').disabled = true;
        document.getElementById('cmpCorreo').disabled = true;
        document.getElementById('cmpTelefono').disabled = true;
        document.getElementById('cmpCI').disabled = true;
    };

    const actualizarDatos = () => {
        const formData = new FormData();
        formData.append('token',sessionStorage.getItem('token'));
        formData.append('nombre',nombre.current.value);
        formData.append('apellido',apellido.current.value);
        formData.append('email',correo.current.value);
        formData.append('telefono',telefono.current.value);
        formData.append('codSis',codSis.current.value);
        fetch('/api/actualizarPerfil', {
            method: 'POST',
            body: formData
        })
        .then((response) => {
            if (response.ok) {
                alert("Actualizado");
            } else {
                alert("Algo paso")
            }
        });
        bloquearCampos();
    };

    return(
        <div id="contenedor">
            <div id="tarjeta-datos">
                <div id="img-usuario">
                    <img id="imagen" src={ "../resources/cargando.png" } alt="foto-perfil" ref={ imagen }/>
                </div>
                {
                    edita && (
                        <div id="cont-icono-editar" onClick={ editarCampos }>
                            <Editar />
                        </div>
                    ) 
                }
                <div id="datos">
                        <div>
                        <label id="lbDetalles">DETALLES DEL USUARIO:</label>
                    </div>
                    <div>
                        <label className="labels">Nombre:</label>
                        <input id="cmpNombre" className="texto" type="text" ref={ nombre } disabled /> 
                    </div>
                    <div>
                        <label className="labels">Apellido:</label>
                        <input id="cmpApellido" className="texto" type="text" ref={ apellido } disabled />
                    </div>
                    <div>
                        <label className="labels">Carrera:</label>
                        <input id="cmpCarrera" className="texto" type="text" ref={ carrera } disabled />
                    </div>
                    <div>
                        <label className="labels">Grupo:</label>
                        <input id="cmpGrupo" className="texto" type="text" ref={ grupo }  disabled /> 
                    </div>
                    <div>
                        <label className="labels">Correo Electrónico:</label>
                        <input id="cmpCorreo" className="texto" type="text" ref={ correo } disabled />
                    </div> 
                    <div>
                        <label className="labels">Teléfono/Celular:</label>
                        <input id="cmpTelefono" className="texto" type="text" ref={ telefono } disabled />
                    </div>
                    <div>
                        <label className="labels">Codigo SIS:</label>
                        <input id="cmpCI" className="texto" type="text" ref={ codSis } disabled />
                    </div> 
                </div>
                {
                    editando && (
                        <div id="cont-iconos-edicion">
                            <div id="cont-icono-atras" onClick={ bloquearCampos } >
                                <IconoAtras/>
                            </div>
                            <div id="cont-icono-guardar" onClick={ actualizarDatos }>
                                <IconoGuardar/>
                            </div>
                        </div>
                        
                    )
                } 
            </div>
        </div>
        
    );
};

export default PerfilUsuario;