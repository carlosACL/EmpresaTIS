import React, {useState, useEffect, useRef} from 'react';
import { Card } from '../elementos/card';
import {InputStyle } from '../elementos/registro';
import { Boton} from '../elementos/tabla';
import {Acordeon,AccordionSection,Container,Wrap,Dropdown } from '../elementos/acordeon'
import Chevron from './Acordeon/chevron.svg'
import {Accordion, AccordionItem} from 'react-light-accordion'
import 'react-light-accordion/demo/css/index.css';


  



          

const EspacioGeneral = () => {
    
    return(
        <main>
            <Card>
                    <div id="cont-label-logo">
                        <label id="label-login-logo">ESPACIO GENERAL</label>
                    </div>
                    
                        <Accordion atomic = {true}>
                            <AccordionItem title = "DESCRIPCION" >
                            <h1>ReactAcordion</h1>
                            </AccordionItem> 
                            <AccordionItem title = "ANUNCIOS" >
                            <h1>ReactAcordion</h1>
                            </AccordionItem>
                            <AccordionItem title = "DOCUMENTACION" >
                            <h1>ReactAcordion</h1>
                            </AccordionItem>
                    
                        </Accordion>


            </Card>  
            
        </main>
    );

    

};

export default EspacioGeneral;