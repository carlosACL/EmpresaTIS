import React from 'react'
import {
    Formulario,
    ContenedorDatos,
    ContenedorBloque,
    Titulo,
    Boton
} from './../elementos/registro';
import { Card } from '../elementos/card';
import Input from './RegistroGE/Input';
import InputImg from './RegistroGE/InputImg';


const EditarGE = () => {

    const validarCalendario = () => {
        const convertirDig = (n) => {
            return (n < 10) ? '0' + n : n;
        }
        const date = new Date();
        const [dia, mes, anio] = [convertirDig(date.getDate()),
        convertirDig(date.getMonth() + 1),
        convertirDig(date.getFullYear())];
        return `${anio}-${mes}-${dia}`;
    }

    return (
        <main>
            <Card>
                <Formulario>
                    <ContenedorBloque>
                        <Titulo>MythicalSoft</Titulo>
                    </ContenedorBloque>
                    <div className="container border vh-75 d-flex justify-content-end">
                        <div className="row">
                            <div className="col-3 border">
                                <h5 className='text-left'><b>Tipo de Organizacion Juridica</b></h5>
                            </div>
                            <div className="col-5 border">
                                <div>
                                    <Input nombre='nomGE' placeholder='Nombre Grupo-Empresa' tipo='text' />
                                </div>
                                <br />
                                <div>
                                    <Input nombre='Nombre Abreviado' tipo='text' placeholder='Nombre Abreviado' />
                                </div>
                                <br />
                                <div>
                                    <Input nombre='telefono' tipo='number' placeholder='Telefono' maxlength={9} minlenght={7} />
                                </div>
                                <br />
                                <div>
                                    <Input nombre='direccion' tipo='text' placeholder='Direccion' />
                                </div>
                                <br />
                                <div>
                                    <Input nombre='email' tipo='email' placeholder='Correo electronico' />
                                </div>
                                <br />
                                <div>
                                    <select>
                                        <option>Sociedad de Responsabilidad</option>
                                        <option>Sociedad Coletiva</option>
                                        <option>Sociedad Anonima</option>
                                        <option>Sociedad Anonima Mixta</option>
                                    </select>
                                </div>
                                <br />
                                <div>
                                    <textarea placeholder='Objetivo'></textarea>
                                </div>
                            </div>
                            <div className="col-4 border">
                                <InputImg></InputImg>
                            </div>
                        </div>
                        <div className="row">

                        </div>

                    </div>
                    <div className="container border vh-25 d-flex justify-content-end">
                        <div className="row">


                            <div className="col-6">
                                <Boton type='submit'>Registrar</Boton>
                            </div>
                            <div className="col-6">
                                <Boton type='submit'>Registrar</Boton>
                            </div>
                        </div>
                    </div>


                </Formulario>

            </Card>
        </main>
    )
}

export default EditarGE
