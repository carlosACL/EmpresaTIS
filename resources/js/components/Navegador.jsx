import {useEffect} from 'react'
import { Nav, IconNav } from '../elementos/navegador'
import ItemNavegador from './Navegador/ItemNavegador'
import Logo from './Navegador/Logo'
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Session from './Navegador/Session'
import { datosNavegador } from '../parametros/menus';

const Navegador = () => {

    const session = sessionStorage.getItem('id');
  
    return (
        <>
            <Nav className = 'navbar navbar-expand-lg'>
                <Logo link='/'/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sessionNav" aria-controls="sessionNav" aria-expanded="false" aria-label="Toggle navigation">
                    <IconNav icon={faUserCircle} ></IconNav>
                </button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegadorResp" aria-controls="navegadorResp" aria-expanded="false" aria-label="Toggle navigation">
                    <IconNav icon={faBars} ></IconNav>
                </button>
                <div id='navegadorResp' className = "collapse navbar-collapse">  
                    <ul className="navbar-nav">      
                        {datosNavegador.map((dato) => (<li className="nav-item"><ItemNavegador className='nav-item active' link={dato.link} nombre = {dato.nombre}/></li>))}
                        {
                            (session != null) && (
                                <li className="nav-item"><ItemNavegador className='nav-item active' link='/Inscritos' nombre = 'Inscritos en la Materia' /></li>
                            )
                        }
                    </ul>
                </div>
                <Session className=' text-lg-right'></Session>   
            </Nav>
        </>
    )
}

export default Navegador;
