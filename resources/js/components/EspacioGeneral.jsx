import React, { useRef, useEffect, useState } from 'react';
import { Boton, InputStyle } from '../elementos/registro';


return(
        <main id="main-login">
            <div id="contenedor-login">
                <div id='tarjeta-datos'>
                    <form onSubmit={iniciarSession}>
                        <div id="cont-label-logo">
                            <label id="label-login-logo">TABLON GENERAL</label>
                        </div>
                        
                        <div id="cont-logo">
                            <img src={ logo } width='100%'/>
                        </div>

                        
                           
                    </form>  
                </div>  
            </div>  
        </main>
    );



export default EspacioGeneral;