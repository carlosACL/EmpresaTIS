import React from 'react';
import { Card as div } from '../elementos/card';
import { Boton, InputStyle } from '../elementos/registro';

const Login = () => {

    const logo = './resources/LOGO.png';

    return(
        <main>
            <div id='tarjeta-datos'>
                <form>
                    <div id="cont-label-logo">
                        <label id="label-login-logo">BIENVENIDO</label>
                    </div>
                    
                    <div id="cont-logo">
                        <img src={ logo } width='100%'/>
                    </div>

                    <div id="cont-datos-login">
                        <InputStyle className="input-login" type="text" placeholder="Nombre de Usuario" />

                        <InputStyle className="input-login" type="password" placeholder="Contraseña" />
                        
                        <Boton type="submit" id="boton-login" >Iniciar Sesión</Boton>

                        <div id="cont-label-login">
                           <label id="label-login">¿AÚN NO TIENES CUENTA?</label> 
                        </div>

                        <Boton type="button" id="boton-login" >Registrarse</Boton>

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