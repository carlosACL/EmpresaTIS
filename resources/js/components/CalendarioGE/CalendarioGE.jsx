import React, { useRef, useState } from 'react';
import { Card } from '../../elementos/card';
import { Tabla, THead } from '../../elementos/GE';
import { InputStyle } from '../../elementos/registro';
import { TBody } from '../DatosVistaInscritos/estilosVistaInscritos/estilosVistaInscritos';
import Fecha from '../RegistroGE/Fecha';
import IconoAtras from '../Svg/IconoAtras';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import IconoGuardar from '../Svg/IconoGuardar';
import { ContBtmDerecho, ContBtmIzquierdo, ContCalendar, ContCampos, ContIconos, ContInputs, ContLabelInput, IconPlus } from './estilos/calendarioGE';

const CalendarioGE = () => {

    const [agEvento, setAgEvento] = useState(false);
    const descEvt = useRef(null);
    const formulario = useRef(null);

    const agregarEvt = () => {
        setAgEvento(true);
    };

    const cancEvt = () => {
        setAgEvento(false);
    };

    const agregarUnEvento = () => {
        const datos = new FormData(document.getElementById('formulario'));
        datos.append('idCalendario', 0); //Probando solo para un calendario de id 0
        fetch('api/agregarEvento',{
            method: 'POST',
            body: datos
        })
        .then((res) => {
            if (res.ok) {
                alert('Evento agregado al calendario');
                setAgEvento(false);
            } else {
                alert('Error al agregar');
            }
        })
    };

    return(
        <Card style={{margin: '100px auto', height: '600px', maxHeight: '750px'}}>
            <ContCalendar>
                {
                    (agEvento) && (
                        <form
                            ref={formulario}
                            id='formulario'
                            className='formStyle' 
                            method='POST' 
                            encType="multipart/form-data"
                        >
                            <ContCampos>
                                <h2>Evento</h2>
                                <ContInputs>
                                    <ContLabelInput>
                                        <h6 className="text-left">Fecha:</h6>
                                        <Fecha name='fecha_inicio'/>
                                    </ContLabelInput>
                                    <ContLabelInput>
                                        <h6 className="text-left">Fecha Limite:</h6>
                                        <Fecha name='fecha_final' />
                                    </ContLabelInput>
                                    <ContLabelInput>
                                        <h6 className="text-left">Descripción del Evento:</h6> 
                                        <InputStyle
                                            name='nombre'
                                            ref={descEvt}
                                            type="text"
                                        />
                                    </ContLabelInput>                      
                                </ContInputs>                 
                                <ContIconos>
                                    <ContBtmDerecho onClick={cancEvt}>
                                        <IconoAtras/>
                                    </ContBtmDerecho>
                                    <ContBtmIzquierdo onClick={agregarUnEvento}>
                                        <IconoGuardar/>
                                    </ContBtmIzquierdo>
                                </ContIconos>
                            </ContCampos>
                        </form>                     
                    )
                }
                
                <div>
                    <h2>Calendario</h2>
                    {
                        (!agEvento) && (
                           <div>
                                <IconPlus onClick={agregarEvt} icon={faPlusCircle}/>
                            </div>  
                        )
                    }
                </div>
                
                <Tabla style={{width: '100%', height: 'auto'}}>
                    <THead>
                        <tr>
                            <th>Fecha</th>
                            <th>Fecha Limite</th>
                            <th>Evento</th>
                            <th>Editar</th>
                            <th>Quitar</th>
                        </tr>
                    </THead>
                    <TBody>
                    </TBody>
                </Tabla>
            </ContCalendar>
        </Card>
    );
}

export default CalendarioGE;