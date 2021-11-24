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
                    <div>
                        <Accordion atomic = {true}>
                            <AccordionItem title = "DESCRIPCION" >
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque magnam eum eligendi possimus. Quos assumenda totam quisquam dolor minima. Reiciendis eveniet explicabo odio earum, ratione amet atque necessitatibus sed nobis?</p>
                            </AccordionItem> 
                            <AccordionItem title = "ANUNCIOS" >
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque magnam eum eligendi possimus. Quos assumenda totam quisquam dolor minima. Reiciendis eveniet explicabo odio earum, ratione amet atque necessitatibus sed nobis?</p>
                            </AccordionItem>
                            <AccordionItem title = "DOCUMENTACION" >
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque magnam eum eligendi possimus. Quos assumenda totam quisquam dolor minima. Reiciendis eveniet explicabo odio earum, ratione amet atque necessitatibus sed nobis?</p>
                            </AccordionItem>
                    
                        </Accordion>
                    </div>

            </Card>  
            
        </main>
    );

    

};

export default EspacioGeneral;