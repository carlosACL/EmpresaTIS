import React from 'react'
import {ContenedorDatos, 
        ContenedorBloque,
        Titulo,
        Boton } from './../elementos/registro';
import { Card } from '../elementos/card';
import Input from './RegistroGE/Input';
import InputImg from './RegistroGE/InputImg';


const RegistroGE = () => {

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
            <Card>
                <form className='formStyle' method='POST' enctype="multipart/form-data" action='api/registrarGrupoEmpresa'>
                    <ContenedorBloque>
                        <Titulo>Registro Grupo-Empresa</Titulo>
                    </ContenedorBloque>
                    <ContenedorDatos>
                        <div>
                            <h5 className='text-left'><b>1. Fecha de Registro</b></h5><br/>
                            <Input nombre='fecha_registro' tipo='date' max={validarCalendario()} min='1999-01-01'/><br/><br/>
                            <h5 className='text-left'><b>2. Tipo de Organizacion Juridica</b></h5><br/>
                            <select name='orgJur'>
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
                        <textarea name='descripcion' placeholder='Objetivo'></textarea>
                        <Boton type='submit'>Registrar</Boton>
                    </ContenedorBloque>
                </form>            
            </Card>
        </main>
    )
}

export default RegistroGE
