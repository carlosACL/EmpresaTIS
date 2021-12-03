import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../../elementos/card';
import { Tabla, THead } from '../../elementos/GE';
import { Icon, InputStyle } from '../../elementos/registro';
import { TBody, TItem } from '../DatosVistaInscritos/estilosVistaInscritos/estilosVistaInscritos';
import Fecha from '../RegistroGE/Fecha';
import IconoAtras from '../Svg/IconoAtras';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import IconoGuardar from '../Svg/IconoGuardar';
import { ContBtmDerecho, ContBtmIzquierdo, ContCalendar, 
        ContCampos, ContIconos, ContInputs, 
        ContLabelInput, IconPlus } from './estilos/calendarioGE';
import BotonEditarEvt from './BotonEditar';

const CalendarioGE = () => {
    const [datosGE, setDatosGE] = useState(null);
    const [agEvento, setAgEvento] = useState(false);
    const [edEvento, setEdEvento] = useState(false);
    const [eventos, setEventos] = useState([]);
    const [idEventoEdit, setIdEventoEdit] = useState(null);
    const formulario = useRef(null);

    const [nombreEvt, setNombreEvt] = useState('');
    const [fechaIniEvt, setFechaIniEvt] = useState(null);
    const [fechaFinEvt, setFechaFinEvt] = useState(null);

    useEffect(() => {
        const datos = new FormData();
        datos.append('nombreGE', nombreGE);
        datos.append('idUsuario', sessionStorage.getItem('id'));
        fetch('api/obtenerDatosGrupoEmpresa',{
            method: 'POST',
            body: datos
        })
        .then((response)=>response.json())
        .then((data) => {
            setDatosGE(data);
        });
    },[])

    const agregarEvt = () => {
        setAgEvento(true);
        setEdEvento(false);
    };

    const cancEvt = () => {
        setAgEvento(false);
        setEdEvento(false);
        setNombreEvt('');
        setFechaIniEvt(null);
        setFechaFinEvt(null);
    };

    const agregarUnEvento = () => {
        const datos = new FormData(document.getElementById('formulario'));
        datos.append('idGE', datosGE.idGE);
        fetch('api/agregarEvento',{
            method: 'POST',
            body: datos
        })
        .then((res) => {
            if (res.ok) {
                alert('Evento agregado al calendario');
                setAgEvento(false);
                setNombreEvt('');
                setFechaIniEvt(null);
                setFechaFinEvt(null);
            } else {
                alert('Ocurrio un error al agregar evento');
            }
        })
    };

    const obtenerEventos = () => {
        if (datosGE != null) {
            const datos = new FormData();
            datos.append('idGE', datosGE.idGE);
            fetch('api/obtenerEventos',{
                method: 'POST',
                body: datos
            })
            .then((response) => response.json())
            .then((data)=>{
                setEventos(data);
            })
        }
    };
    
    const editarEvento = () => {
        const datos = new FormData(document.getElementById('formulario'));
        datos.append('idEvento', idEventoEdit);
        fetch('api/editarEvento',{
            method: 'POST',
            body: datos
        })
        .then((res) => {
            if (res.ok) {
                alert('Evento Editado Correctamente');
                setEdEvento(false);
                setIdEventoEdit(null);
            } else {
                alert('No se pudo actualizar el evento');
            }
        })
    };

    const activarEdicion = (evento) => {
        setIdEventoEdit(evento.idEvento),
        setEdEvento(true),
        setAgEvento(false),
        setNombreEvt(evento.nombre);
        setFechaIniEvt(evento.fecha_inicio);
        setFechaFinEvt(evento.fecha_final);
    };

    useEffect(() => {
        obtenerEventos();
    }, [datosGE, agEvento, edEvento])

    return(
        <Card style={{margin: '100px auto',
                      height: 'auto',
                      padding: '20px',
                      minWidth: '0'}}>
            <ContCalendar>
                {
                    (agEvento || edEvento) && (
                        <form
                            ref={formulario}
                            id='formulario'
                            className='formStyle' 
                            method='POST' 
                            encType="multipart/form-data"
                        >
                            <ContCampos>
                                <h2 style={{marginBottom: '40px'}}>Evento</h2>
                                <ContInputs>
                                    <ContLabelInput>
                                        <h6 className="text-left">Fecha:</h6>
                                        <Fecha 
                                            name='fecha_inicio'
                                            cargarFecha={fechaIniEvt}
                                            />
                                    </ContLabelInput>
                                    <ContLabelInput>
                                        <h6 className="text-left">Fecha Limite:</h6>
                                        <Fecha 
                                            name='fecha_final'
                                            cargarFecha={fechaFinEvt}    
                                        />
                                    </ContLabelInput>
                                    <ContLabelInput>
                                        <h6 className="text-left">Descripción del Evento:</h6> 
                                        <InputStyle
                                            id='evt-desc'
                                            name='nombre'
                                            type="text"
                                            value={ nombreEvt }
                                            onChange={e => setNombreEvt(e.target.value)}
                                        />
                                    </ContLabelInput>                      
                                </ContInputs>                 
                                <ContIconos>
                                    <ContBtmDerecho onClick={cancEvt}>
                                        <IconoAtras/>
                                    </ContBtmDerecho>
                                    <ContBtmIzquierdo onClick={agEvento? agregarUnEvento: editarEvento}>
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
                                <IconPlus 
                                    onClick={agregarEvt} 
                                    icon={faPlusCircle}    
                                />
                            </div>  
                        )
                    }
                </div>
                <div style={{maxHeight: '400px',minHeight: '400px', overflow: 'auto'}}>
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
                    {
                            (eventos != null)? eventos.map((evento) => (
                                <TItem>
                                    <td>{evento.fecha_inicio}</td>
                                    <td>{evento.fecha_final}</td>
                                    <td>{evento.nombre}</td>
                                    <td>
                                        <BotonEditarEvt 
                                            evento={evento}
                                            onClickBtm={() => {
                                                activarEdicion(evento)
                                            }}    
                                        />
                                    </td>
                                    <td>
                                        <Icon 
                                            style={{fontSize: '30px',
                                                    cursor: 'pointer'}} 
                                            icon={faMinusCircle}
                                        />
                                    </td>
                                </TItem>
                            ))
                            :(<></>)
                        } 
                    </TBody>
                </Tabla>
                </div>
                
            </ContCalendar>
        </Card>
    );
}

export default CalendarioGE;