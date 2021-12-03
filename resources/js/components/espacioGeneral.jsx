import React, {useState, useEffect, useRef} from 'react';
import { Card } from '../elementos/card';
import {InputStyle } from '../elementos/registro';
import Chevron from './Acordeon/chevron.svg'
import {Accordion, AccordionItem} from 'react-light-accordion'
import 'react-light-accordion/demo/css/index.css';
import { Acordeon, MarcoIcono, Panel, TextArea } from '../elementos/espacioGeneral';
import {faPlus, 
        faMinus } from '@fortawesome/free-solid-svg-icons';
import { Boton } from '../elementos/registro';
import ItemAcord from './Acordeon/ItemAcord';




          

const EspacioGeneral = () => {
    
    const formulario = useRef(null);
    const contenidoAnuncio=() => {
        return (<>
            <TextArea></TextArea>
            <div>
                <Boton>Enviar</Boton>
            </div>
                
        </>)
    }

    const contenidoDescripcion = () => {
        const Submit = () =>{
            const data = new FormData (document.getElementById('anuncioId1'));
            fetch ('api/registrarDescrip',{
                method: 'POST',
                body:data
            }).then (()=>{
        
        
            });
        
        }

        const enviarDescripcion = () => {
            

            const valor = document.getElementById('anuncioId1');

            if(valor.value.length<140 && valor.value.length > 0){
                alert("enviado con exito");
                desplegarAnuncio();
            } else {
                alert("error, contenido debe tener un tamaño inferior 140 caracteres y no debe estar vacio");
            }
        }

        return (<>
        <form   ref={formulario}
                id='formulario'
                onSubmit={Submit}
                method='POST'
                >
            <TextArea id='anuncioId1'></TextArea>

            <div>
                <Boton id='botonSub' type = 'submit'onClick= { enviarDescripcion } >Enviar</Boton>
            </div>
        </form>    
        </>)
    }

    const contenidoDocumentacion = () => {
        return (<input type='file'/>)
    }
    
    return(
        <main>
            <Card>
                    <div id="cont-label-logo">
                        <label id="label-login-logo">ESPACIO GENERAL</label>
                    </div>
                    <div className='p-5'>
                        <Accordion atomic = {true}>
                            <ItemAcord titulo='Descripcion' contenido={ contenidoDescripcion } />
                            <ItemAcord titulo='Anuncios' contenido={ contenidoAnuncio }/>
                            <ItemAcord titulo='Documentacion' contenido={ contenidoDocumentacion }/>
                            <ItemAcord titulo='Calendario' contenido={ () => {} }/>
                            
                        </Accordion>
                    </div>

            </Card>  
            
        </main>
    );

    

};

export default EspacioGeneral;