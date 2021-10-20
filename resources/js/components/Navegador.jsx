import React from 'react'
import { Nav } from '../elementos/navegador'
import ItemNavegador from './Navegador/ItemNavegador'
import Logo from './Navegador/Logo'
import Session from './Navegador/Session'

const Navegador = () => {

    const datos = [
        {
            nombre:'nombre',
            link : "link 2"
        },
        {
            nombre:'nombre2',
            link : 'www.animeflv.net'
        },
        {
            nombre:'nombre3',
            link : 'www.animeflv.net'
        },
        {
            nombre:'nombre4',
            link : 'www.animeflv.net'
        },
    ];

    return (
        <>
            <Nav className = 'navbar navbar-collapse'>
                <div className= 'navbar navbar-expand-lg'>
                    <Logo link='#'/>
                    {datos.map((dato) => (<ItemNavegador className=' nav-item' link={dato.link} nombre = {dato.nombre}/>))}
                </div>
                <Session></Session>
            </Nav>
        </>
    )
}

export default Navegador;
