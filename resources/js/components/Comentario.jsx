import React from 'react';
import { Card } from './../elementos/card';
import { Boton } from './../elementos/scroll';


const Comentario = (props) => {

    return (
        <main>
            <Card>
                <div className="p-3 border border-dark bg-light">
                    <div className="row p-3">
                        <div className="h4 text-left">
                            Espacio Para Dudas <br />
                            Escribe Alguna Duda
                        </div>
                        <div>
                            <Boton>
                                Añadir una nueva duda
                            </Boton>
                        </div>

                    </div>
                    <div className="row p-3">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Debate</th>
                                    <th scope="col">Alumno</th>
                                    <th scope="col">Tema de Discusion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Clases en la semana</td>
                                    <td>Marcos Lopez Ismael</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, reiciendis optio repudiandae consectetur sunt voluptas! Accusantium dolor, minima aspernatur ipsam, atque aperiam consectetur quis hic possimus vitae voluptates neque! Quis.</td>
                                </tr>
                                <tr>
                                    <td>Clases en la semana</td>
                                    <td>Marcos Lopez Ismael</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, reiciendis optio repudiandae consectetur sunt voluptas! Accusantium dolor, minima aspernatur ipsam, atque aperiam consectetur quis hic possimus vitae voluptates neque! Quis.</td>
                                </tr>
                                <tr>
                                    <td>Clases en la semana</td>
                                    <td>Marcos Lopez Ismael</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, reiciendis optio repudiandae consectetur sunt voluptas! Accusantium dolor, minima aspernatur ipsam, atque aperiam consectetur quis hic possimus vitae voluptates neque! Quis.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row p-3">
                        <div className="col-12 ">
                            <textarea className="float-left" name="" id="" cols="30" rows="10">
                            </textarea>
                        </div>
                        <div className="col-12 d-flex flex-row">
                            <Boton>
                                Enviar
                            </Boton>
                            <Boton>
                                Cancelar
                            </Boton>
                        </div>

                    </div>

                </div>
            </Card>
        </main>


    )
}
export default Comentario;
