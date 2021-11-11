import React from 'react'
import { Card } from '../elementos/card';
import {Boton} from './../elementos/scroll';

const SolicitarIngresoGE = (props) => {

    return (
        <main>
            <Card>
                <form /* ref={formulario} */
                    id='formulario'
                    /* onSubmit={onSubmit} */
                    className='formStyle'
                    method='POST'
                    encType="multipart/form-data">
                    <div className="container p-5">
                        <div className="row p-3">
                            <div className="col-12 p-3 h1">
                                {/* {nombre.campo} */}
                                SOLICITUDES DE INGRESO
                            </div>
                        </div>
                        <div className="row p-3 border bg-light contenedor">
                            <div className="col-7 p-3 columna">
                                <div className="row">
                                    <div className="col-12 text-left">
                                        Nombre abreviado: EdSoft
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-12 text-left">
                                        Telefono: 7458246
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-12 text-left">
                                        Direccion: Av. Circunvalacion
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-12 text-left">
                                        Organizacion Juridica: Sociedad de Responsabilidad Limitada
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-12 text-left">
                                        Correo: edtems@gmail.com
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-12 text-left">
                                        Descripcion: Un objetivo de la empresa de gran importancia
                                    </div>
                                </div>

                            </div>
                            <div className="col-5 p-3 d-flex flex-column">
                                <div className="row">
                                    <div className="col-12">
                                        <img src="./resources/logoDefecto.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="row mt-auto">
                                    <div className="col-12">
                                        <Boton>
                                            Solicitar Ingreso
                                        </Boton>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </form>
            </Card>
        </main>


    )
}
export default SolicitarIngresoGE
