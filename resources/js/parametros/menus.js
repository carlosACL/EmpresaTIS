import {faUser, 
faUsers,
faAddressCard,
faBriefcase,
faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { cerrarSession } from '../session';
//Socio-{id}
const opcionesUsuario = [{
    link :'Socio-'+sessionStorage.getItem('id'), 
    name:'perfil', 
    contenido:'Mi Perfil', 
    img:faUser,
    onClick: null
},{
    link : (sessionStorage.getItem('ge')) ? 'GE-'+sessionStorage.getItem('ge'):'#', 
    name:'grupoEmpresa', 
    contenido:'Mi Grupo Empresa', 
    img:faUsers,
    onClick: null
},{
    link : "RegistroGE", 
    name:'crearGrupoEmpresal', 
    contenido:'Crear Grupo Empresa', 
    img:faAddressCard,
    onClick: null
},{
    link : "#", 
    name:'espacioTrabajo', 
    contenido:'Mi Espacio de trabajo', 
    img:faBriefcase,
    onClick: null
},{
    link : "#", 
    name:'cerrarSession', 
    contenido:'Cerrar Session', 
    img:faPowerOff,
    onClick: cerrarSession
},];

const registrarse = {
    nombre:'Registrarse',
    link:'#'
}

const iniciarSession = {
    nombre:'Iniciar Session',
    link:'Login'
}

const datosNavegador = [
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

export {opcionesUsuario, 
        registrarse, 
        iniciarSession, 
        datosNavegador};
