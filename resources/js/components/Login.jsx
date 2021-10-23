import { create } from 'lodash';
import React, { useRef, useEffect } from 'react';
import { Card as div } from '../elementos/card';
import { Boton, InputStyle } from '../elementos/registro';
import { iniciarSession } from '../parametros/menus';
import { createSession, isSessionActive } from '../session';

const Login = () => {

    useEffect(() => {
        isSessionActive().then((result) => {
            console.log(result);
            if(result){
                location.replace('/');
            };
        });;
    }, []);
        

    const refUser = useRef(null);
    const refPass = useRef(null);
    const logo = './resources/LOGO.png';
    const iniciarSession = (e) => {
        e.preventDefault();
            //voy a hacer de cuenta que ese usuario existe y me esta devolviendo el id
        const id = 123;
        createSession(id);
        location.replace('/');
    };
    return(
        <main>
            <div id='tarjeta-datos'>
                <form onSubmit={iniciarSession}>
                    <div id="cont-label-logo">
                        <label id="label-login-logo">BIENVENIDO</label>
                    </div>
                    
                    <div id="cont-logo">
                        <img src={ logo } width='100%'/>
                    </div>

                    <div id="cont-datos-login">
                        <InputStyle ref = {refUser} className="input-login" name='user' type="text" placeholder="Nombre de Usuario" />

                        <InputStyle ref = {refPass} className="input-login" name='password' type="password" placeholder="Contraseña" />
                        
                        <Boton type="submit" id="boton-login" >Iniciar Sesión</Boton>

                        <div id="cont-label-login">
                           <label id="label-login">¿AÚN NO TIENES CUENTA?</label> 
                        </div>

                        <Boton type="submit" id="boton-login" >Registrarse</Boton>

                        <div id="link-login">
                            <a href="www.google.com">¿No puedes iniciar sesión?</a>
                        </div>
                    </div>     
                </form>  
            </div>  
        </main>
    );

};

export default Login;