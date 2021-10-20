import React from 'react'
import ItemNavegador from './ItemNavegador'
import { ItemNavI } from '../../elementos/navegador'

const Session = () => {
    const registrarse = {
        nombre:'Registrarse',
        link:'#'
    }

    const iniciarSession = {
        nombre:'Iniciar Session',
        link:'#'
    }
    return (
        <div className='navbar navbar-expand-lg'>
            <ItemNavegador className=' nav-item' link={registrarse.link} nombre={registrarse.nombre} />
            <ItemNavI className='nav-item ml-4' link={iniciarSession.link} nombre={iniciarSession.nombre} >
                <a className='text-decoration-none m-3' href={iniciarSession.link} >{iniciarSession.nombre}</a>
            </ItemNavI>
        </div>
    )
}

export default Session;
