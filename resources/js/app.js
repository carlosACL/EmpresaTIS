/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

//require('./bootstrap');
import 'bootstrap/dist/css/bootstrap.css';
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');

import ReactDOM from 'react-dom';
import RegistroGE from './components/RegistroGE';
import EditarGE from './components/EditarGE';
import React from 'react';
import '../css/app.css';
import {Fondo} from './elementos/card';
import PerfilUsuario from './components/perfilUsuario';
import Navegador from './components/Navegador';
import Login from './components/Login';
//import Login from "./components/Login/Login"

/*

    if(document.getElementById('login')){
        ReactDOM.render(<Login/>,document.getElementById('regGE'));
    }

*/

if (document.getElementById('fondo')) {
    ReactDOM.render(
        <div>
            <Fondo src='./resources/asesoria-cont-financ_001.png' />
        </div>, document.getElementById('fondo'));

};

if (document.getElementById('regGE')) {
    ReactDOM.render(
        <div >
            <RegistroGE />
        </div>, document.getElementById('regGE'));
}

if (document.getElementById('editGE')) {
    ReactDOM.render(
        <div >
            <EditarGE />
        </div>, document.getElementById('editGE'));
}


if(document.getElementById('perfil')){
    ReactDOM.render(<div >
                        <PerfilUsuario />
                  </div>
        ,document.getElementById('perfil'));
}

if(document.getElementById('navegador')){
    ReactDOM.render(<Navegador />, document.getElementById('navegador'));
}

if(document.getElementById('login')){
    ReactDOM.render(<div >
                        <Login />
                  </div>
        ,document.getElementById('login'));
}
