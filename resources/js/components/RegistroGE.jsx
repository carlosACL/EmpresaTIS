import React, { useRef, useState } from 'react'
import {ContenedorDatos, 
        ContenedorBloque,
        Titulo,
        Boton,
        MensajeRGE } from './../elementos/registro';
import { Card } from '../elementos/card';
import Input from './RegistroGE/Input';
import InputImg from './RegistroGE/InputImg';


const RegistroGE = () => {

    const [msg, setMsg] = useState(false);
    const formulario = useRef(null);
    const onSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData(document.getElementById('formulario'));
        await fetch('api/registrarGrupoEmpresa', {
            method:'POST',
            body:data
        }).then((response) => {
            setMsg(true);
            const mensaje = document.getElementById('mensajeRGE');
            let color = null;
            if(response.ok){
                color = "#6aff00";
                mensaje.innerHTML = "Exito al Registrar Grupo empresa";

                const files = Array.from(document.getElementsByTagName('input'));
                files.map((inp) => {
                    inp.disabled = true;
                });
                document.getElementById('orgJur').disabled = true;
                document.getElementById('descripcion').disabled = true;
                document.getElementById('botonSub').disabled = true;
                
            } else {
                color = 'red';
                mensaje.innerHTML = "Error al registrar Grupo empresa, intentelo de nuevo mas tarde";
            }
            document.getElementById('cardItem').style = `border-style:solid;box-shadow: 10px 10px 10px ${color}; border-color: ${color}`;
            mensaje.style = `transition: .5s ease all;border-color:  ${color}; color:white; background-color:${color};`;
            window.scroll(0,0);
        });
    };

    const validarCalendario = () => {
        const convertirDig = (n) => {
            return (n < 10) ? '0'+n : n;
        }
        const date = new Date();
        const [dia, mes, anio] = [convertirDig(date.getDate()), 
                                convertirDig(date.getMonth()+1),
                                    convertirDig(date.getFullYear())];
        return `${anio}-${mes}-${dia}`;
    }

    const orgJur = ['Sociedad de Responsabilidad limitada','Sociedad Coletiva','Sociedad Anonima','Sociedad Anonima Mixta'];

    return (
        <main>
            <Card id='cardItem'>
                <form ref={formulario} id='formulario' onSubmit={onSubmit} className='formStyle' method='POST' encType="multipart/form-data">
                    <ContenedorBloque>
                        <Titulo>Registro Grupo-Empresa</Titulo>
                    </ContenedorBloque>
                    {(msg) && ( <ContenedorBloque >
                        <MensajeRGE id='mensajeRGE'></MensajeRGE>
                        </ContenedorBloque>)}
                    <ContenedorDatos>
                        <div>
                            <h5 className='text-left'><b>1. Fecha de Registro</b></h5><br/>
                            <Input nombre='fecha_registro' tipo='date' max={validarCalendario()} min='1999-01-01'required/><br/><br/>
                            <h5 className='text-left'><b>2. Tipo de Organizacion Juridica</b></h5><br/>
                            <select id='orgJur' name='orgJur' required>
                                <option>--Seleccione una opcion--</option>
                                {orgJur.map((dat) => {
                                    return(<option value={dat}>{dat}</option>)
                                })}
                            </select>
                        </div>
                        <div className='imagenGERC'>
                            <InputImg name='imagen'></InputImg>
                        </div>
                    </ContenedorDatos>    
                    <ContenedorBloque>
                        <h5 className='text-left'><b>3. Datos de la Empresa</b></h5><br/>
                        <ContenedorDatos>
                            <div>
                                <Input nombre='nombre' placeholder='Nombre Grupo-Empresa' tipo='text'/>
                            </div>
                            <div>
                                <Input nombre='direccion' tipo='text' placeholder='Direccion'/>
                            </div>
                            <div>
                                <Input nombre='nombreAb' tipo='text' placeholder='Nombre Abreviado'/>
                            </div>
                            <div>
                                <Input nombre='email' tipo='email' placeholder='Correo electronico'/>
                            </div>
                            <div>
                                <Input nombre='telefono' tipo='number' placeholder='Telefono' maxlength={9} minlenght={7}/>
                            </div>
                        </ContenedorDatos>
                    </ContenedorBloque>
                    <ContenedorBloque className='miTextArea mb-3'>
                        <textarea id='descripcion' name='descripcion' placeholder='Objetivo' required></textarea>
                        <Boton id='botonSub' type='submit'>Registrar</Boton>
                    </ContenedorBloque>
                </form>            
            </Card>
        </main>
    )
}

export default RegistroGE
