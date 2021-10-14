import React from 'react'
import { Formulario,
        ContenedorDatos,
        ContenedorBloque,
        Titulo,
        Boton } from './../elementos/registro';
import { Card } from '../elementos/card';
import Input from './RegistroGE/Input';
import InputImg from './RegistroGE/InputImg';


const EditarGE = () => {

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

    return (
        <main>
            <Card>
                <Formulario>
                    <ContenedorBloque>
                        <Titulo>Editar Grupo-Empresa</Titulo>
                    </ContenedorBloque>
                    <ContenedorDatos>
                        <div>
                            <h5 className='text-left'><b>1. Fecha de Registro</b></h5><br/>
                            <Input nombre='calendario' tipo='date' max={validarCalendario()} value={validarCalendario()} min='1999-01-01'/><br/><br/>
                            <h5 className='text-left'><b>2. Tipo de Organizacion Juridica</b></h5><br/>
                            <select>
                                <option>--Seleccione una opcion--</option>
                                <option>Sociedad de Responsabilidad</option>
                                <option>Sociedad Coletiva</option>
                                <option>Sociedad Anonima</option>
                                <option>Sociedad Anonima Mixta</option>
                            </select>
                        </div>
                        <div className='imagenGERC'>
                            <InputImg></InputImg>
                        </div>
                    </ContenedorDatos>
                    <ContenedorBloque>
                        <h5 className='text-left'><b>3. Datos de la Empresa</b></h5><br/>
                        <ContenedorDatos>
                            <div>
                                <Input nombre='nomGE' placeholder='Nombre Grupo-Empresa' tipo='text'/>
                            </div>
                            <div>
                                <Input nombre='direccion' tipo='text' placeholder='Direccion'/>
                            </div>
                            <div>
                                <Input nombre='Nombre Abreviado' tipo='text' placeholder='Nombre Abreviado'/>
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
                        <textarea placeholder='Objetivo'></textarea>
                        <Boton type='submit'>Registrar</Boton>
                    </ContenedorBloque>
                </Formulario>
            </Card>
        </main>
    )
}

export default EditarGE
