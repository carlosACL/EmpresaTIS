import {faUser, 
faUsers,
faAddressCard,
faBriefcase,
faPowerOff} from '@fortawesome/free-solid-svg-icons'

const opcionesUsuario = [{
    link : "#", 
    name:'perfil', 
    contenido:'Mi Perfil', 
    img:faUser
},{
    link : "#", 
    name:'grupoEmpresa', 
    contenido:'Mi Grupo Empresa', 
    img:faUsers
},{
    link : "#", 
    name:'crearGrupoEmpresal', 
    contenido:'Crear Grupo Empresa', 
    img:faAddressCard
},{
    link : "#", 
    name:'espacioTrabajo', 
    contenido:'Mi Espacio de trabajo', 
    img:faBriefcase
},{
    link : "#", 
    name:'cerrarSession', 
    contenido:'Cerrar Session', 
    img:faPowerOff
},];

const registrarse = {
    nombre:'Registrarse',
    link:'#'
}

const iniciarSession = {
    nombre:'Iniciar Session',
    link:'#'
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
