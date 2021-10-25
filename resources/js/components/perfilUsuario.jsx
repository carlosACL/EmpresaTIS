import { useRef, useState, useEffect } from "react";

const PerfilUsuario = () => {

    const datos = {
        id: idUsuario
    }

    const nombre = useRef(null);
    const apellido = useRef(null); 
    let idCarrera = null;
    let idGrupo = null;
    const carrera = useRef(null);
    const grupo = useRef(null);
    const correo = useRef(null); 
    const telefono = useRef(null);
    const codSis = useRef(null);

    const [foto_perfil, setFoto_perfil] = useState("");

    fetch('/api/socio',{
        method: 'POST',
        body: JSON.stringify(datos),
    })
    .then((response) => response.json())
    .then((data) => {
        for(let i = 0; i < data.length; i++) {
            let elemento = data[i];
            if (elemento.idUsuario == datos.id) {
                nombre.current.value = elemento.nombre;
                apellido.current.value = elemento.apellido;
                idCarrera = elemento.idCarrera;
                idGrupo = elemento.idGrupo;
                correo.current.value = elemento.email;
                telefono.current.value = elemento.telefono;
                codSis.current.value = elemento.codSis;
                setFoto_perfil(elemento.foto_perfil);
                break;
            }
        }
    });

    fetch('/api/carrera',{
        method: 'POST',
        body: JSON.stringify(datos),
    })
    .then((response) => response.json())
    .then((data2) => {
        for(let i = 0; i < data2.length; i++) {
            let elemento = data2[i];
            if (elemento.idCarrera == idCarrera) {
                carrera.current.value = elemento.nomCarrera;
                break;
            }
        }
    });

    fetch('/api/grupo',{
        method: 'POST',
        body: JSON.stringify(datos),
    })
    .then((response) => response.json())
    .then((data3) => {
        for(let i = 0; i < data3.length; i++) {
            let elemento = data3[i];
            if (elemento.idGrupo == idGrupo) {
                grupo.current.value = elemento.nomGrupo;
                break;
            }
        }
    });

    let logo = "../resources/socios/" + foto_perfil;

    return(
        <div id="tarjeta-datos">
            <div id="img-usuario">
                <img id="imagen" src={ logo } alt="foto-perfil" title="Foto de Perfil"/>
            </div>
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
        </div>
    );
};

export default PerfilUsuario;