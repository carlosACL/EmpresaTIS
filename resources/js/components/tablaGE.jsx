import React from 'react';
import { Card } from '../elementos/card';
import {InputStyle } from '../elementos/registro';
import { Boton} from '../elementos/tabla';


const FundaEmpresa = () => {

    return(
        <main>
            <div id='tarjeta-datos'>
                    <div id="cont-label-logo">
                        <label id="label-login-logo">GRUPO-EMPRESAS REGISTRADAS</label>
                    </div>
                        <form action="{{ route ('users.import.excel') }}" method ="post" enctype="multipart/form-data">
                            <InputStyle type="file" id="archivo" name= "file" accept=".xlsx" />
                            <Boton id='botonSub' type='submit'>Subir</Boton>
                        </form>
                    
            </div>  
        </main>
    );

    

};

export default FundaEmpresa;