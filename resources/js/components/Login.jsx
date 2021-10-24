import React, { useState } from 'react';
import { Boton, InputStyle } from '../elementos/registro';

const Login = () => {

    const [datos, setDatos] = useState({
        nombreUsuario: '',
        contraseña: ''
    });

    const modificarDatos = (e) => {
        console.log(ev.tar);
        setDatos({
            ...datos,
            [e.tarjet.name]: e.tarjet.value
        })
    };

    const logo = './resources/LOGO.png';

    return(
        <main>
            <div id='tarjeta-datos'>
                <form method='POST'>
                    <div id="cont-label-logo">
                        <label id="label-login-logo">BIENVENIDO</label>
                    </div>
                    
                    <div id="cont-logo">
                        <img src={ logo } width='100%'/>
                    </div>

                    <div id="cont-datos-login">
                        <InputStyle
                            className="input-login" 
                            name="nombreUsuario" 
                            onChange={e => modificarDatos(e)} 
                            type="text" 
                            placeholder="Nombre de Usuario" />

                        <InputStyle 
                            className="input-login" 
                            name="contraseña" 
                            onChange={e => modificarDatos(e)} 
                            type="password" 
                            placeholder="Contraseña" />
                        
                        <Boton id="boton-login" onClick={() => {console.log(datos)}} >Iniciar Sesión</Boton>

                        <div id="cont-label-login">
                           <label id="label-login">¿AÚN NO TIENES CUENTA?</label> 
                        </div>

                        <div className="link-login">
                            <a href="#">Registrarse</a>  
                        </div>

                        <div className="link-login">
                            <a href="#">¿No puedes iniciar sesión?</a>
                        </div>
                    </div>     
                </form>  
            </div>  
        </main>
    );

};

export default Login;