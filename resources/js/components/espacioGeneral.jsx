import React, {useState, useEffect, useRef} from 'react';
import { Card } from '../elementos/card';
import {InputStyle } from '../elementos/registro';
import { Boton} from '../elementos/tabla';
import {Acordeon,AccordionSection,Container,Wrap,Dropdown } from '../elementos/acordeon'
import Chevron from './Acordeon/chevron.svg'
import {Accordion, AccordionItem} from 'react-light-accordion'
import 'react-light-accordion/demo/css/index.css';

const expresiones = {
    anuncio: /^[a-zA-Z0-9]{7,25}$/,
    codsis:/^\d{9,9}$/,
    telefono: /^\d{7,8}$/,
    contrasenia: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,25}$/
};
const validarAnuncio = (estate, regex) => {
    const validar = [];
    if(estate.campo.length<1){
        validar.push("Debes llenar este campo");
    }
    if(estate.campo.length>7 || estate.campo>25){
        validar.push("El anuncio debe tener un maximo de 140 caracteres");
    }
    if(!regex.test(estate.campo) && (estate.campo.length>=7 && estate.campo.length<=25)){
        validar.push("El nombre de usuario solo puede contener letras y numeros");
    }
    return validar;
}

function clearContents(element) {
    element.value = '';
  }

          

const EspacioGeneral = () => {
    
    return(
        <main>
            <Card>
                    <div id="cont-label-logo">
                        <label id="label-login-logo">ESPACIO GENERAL</label>
                    </div>
                    <div>
                        <Accordion atomic = {true}>
                            <AccordionItem title = "DESCRIPCION" >
                                <textarea name="" id="" cols="80" rows="8" placeholder="Insertar una Descripcion"></textarea>
                                <div>
                                    <Boton id='botonsub' >Guardar</Boton>
                                    <Boton id='botonsub' >Cancelar</Boton>
                                </div>
                            </AccordionItem> 
                            <AccordionItem title = "ANUNCIOS" >
                                <textarea name="anuncio" id="anuncio" cols="80" rows="2" placeholder="Insertar un Anuncio" wrap="hard" maxLength="140" funcValidar={validarAnuncio}></textarea>
                                <div>
                                    <Boton id='botonsub' >Guardar</Boton>
                                    <Boton id='botonsub' onClick="clearContents(anuncio)" >Cancelar</Boton>
                                </div>
                            </AccordionItem>
                            <AccordionItem title = "DOCUMENTACION" >
                                <input type="file" />
                            </AccordionItem>
                            <AccordionItem title = "CALENDARIO GENERAL" >
                                
                            </AccordionItem>
                    
                        </Accordion>
                    </div>

            </Card>  
            
        </main>
    );

    

};

export default EspacioGeneral;