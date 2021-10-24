import React from 'react'
import { Card } from '../elementos/card';
import { Titulo } from '../elementos/registro';
import { ContenedorDatos } from '../elementos/registro';
import { obtenerGE } from '../session';
const VistaGrupoEmpresa = () => {
    return (
        <main>
            <Card>
                <div className='formStyle'>
                    <Titulo>Vista Grupo Empresa {nombre} </Titulo>
                    <ContenedorDatos>
                        <div className=' d-block text-left'>
                            <label>nombre de la empresa</label>
                            <label>nombre abreviado de la empresa</label>
                            <label>numero de telefono de la empresa</label>
                            <label>direccion de la empresa</label>
                            <label>Tipo de sociedad juridica</label>
                            <label>Correo Electronico</label>
                            <label>descripcion del correo</label> 
                        </div>
                        <div>
                            <img />
                        </div>
                    </ContenedorDatos>
                </div>
            </Card>
        </main>
    )
}

export default VistaGrupoEmpresa;
