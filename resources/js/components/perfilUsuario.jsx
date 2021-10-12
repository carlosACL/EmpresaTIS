import React from "react";
import { useEffect, useState } from "react";
import '../../css/perfil.css';

const PerfilUsuario = () => {

    return(
        <div id="tarjeta-datos">
            <div id="img-usuario">
                <img href=""/>
            </div>
            <div id="datos">
                    <div>
                    <label id="lbDetalles">DETALLES DEL USUARIO: </label>
                </div>
                <div>
                    <label className="labels">Nombre:</label>
                    <input id="cmpNombre" className="texto" type="text" disabled/> 
                </div>
                <div>
                    <label className="labels">Apellido:</label>
                    <input id="cmpApellido" className="texto" type="text" />
                </div>
                <div>
                    <label className="labels">Carrera:</label>
                    <input id="cmpCarrera" className="texto" type="text" />
                </div>
                <div>
                    <label className="labels">Grupo:</label>
                    <input id="cmpGrupo" className="texto" type="text" /> 
                </div>
                <div>
                    <label className="labels">Correo Electrónico:</label>
                    <input id="cmpCorreo" className="texto" type="text" />
                </div> 
                <div>
                    <label className="labels">Teléfono/Celular:</label>
                    <input id="cmpTelefono" className="texto" type="text" />
                </div>
                <div>
                    <label className="labels">CI:</label>
                    <input id="cmpCI" className="texto" type="text" />
                </div> 
            </div> 
               
        </div>
    );
};


export default PerfilUsuario;