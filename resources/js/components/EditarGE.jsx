import React, { useRef, useState } from 'react'
import {
    ContenedorDatos,
    ContenedorBloque,
    Titulo,
    Boton,
    MensajeRGE
} from './../elementos/registro';
import { Card } from '../elementos/card';
import Input from './EditarGE/Input';
import InputImg from './EditarGE/InputImg';
import OrganizacionJ from './EditarGE/OrganizacionJ';
import TextArea from './EditarGE/TextArea';
import MensajeAlerta from './editarGE/MensajeAlerta';

const EditarGE = (props) => {

    const [idGE, setID] = useState({ campo: '' });
    const [orgJur, setOrgJur] = useState({ valido: false });
    const [telefono, setTelefono] = useState({ campo: '', valido: false });
    const [direccion, setDireccion] = useState({ campo: '', valido: false });
    const [email, setEmail] = useState({ campo: '', valido: false, existe: 'false' });
    const [logo, setLogo] = useState({ campo: '', eliminar: '', valido: false });
    const [nombre, setNombre] = useState({ campo: '', valido: false, existe: 'false' });
    const [nombreAb, setNombreAb] = useState({ campo: '', valido: false });
    const [descripcion, setDescripcion] = useState({ campo: '', valido: false });





    const expresiones = {
        nombre: /^[a-zA-Z\s]{3,30}$/,
        nombreAb: /^[a-zA-Z\s]{2,20}$/,
        correo: /^[a-zA-Z0-9_.+-]+@est.umss.edu$/,
        telefono: /^\d{7,8}$/,
        direccion: /^[a-zA-ZÀ-ÿ0-9\,\.\#\-\_\s]{5,100}$/,
        objetivo: /^[a-zA-ZÀ-ÿ0-9\,\.\s]{10,100}$/,
    };



    const validarLogo = (estate) => {
        const validar = [];
        if (estate.valido == false) {
            validar.push("Tienes que insertar un logo");
        }
        return validar;
    };

    const validarTelefono = (estate) => {
        const validar = [];
        if (estate.campo.length < 1) {
            validar.push('Debe llenar este campo');
        }
        if (estate.campo.length < 7 || estate.campo.length > 8) {
            validar.push('el numero de telefono debe contener un minimo de 7 digitos y un maximo de 8 digitos');
        }
        return validar;
    };

    const validarDireccion = (estate, regex) => {
        const validar = [];
        if (estate.campo.length < 1) {
            validar.push("Debe llenar este campo");
        }
        if (estate.campo.length < 5 || estate.campo.length > 100) {
            validar.push("la direccion debe contener un minimo de 5 caracteres y un maximo de 100 caracteres");
        }
        if (!regex.test(estate.campo) && estate.campo.length > 4) {
            validar.push("hay caracteres invalidos en el campo");
        }
        return validar;
    }

    const validarDescripcion = (estate, regex) => {
        const validar = [];
        if (estate.campo.length < 1) {
            validar.push("Debe llenar este campo");
        }
        if (estate.campo.length < 10 || estate.campo.length > 100) {
            validar.push("La descripcion debe contener un minimo de 10 caracteres y un maximo de 100 caracteres");
        }
        if (!regex.test(estate.campo) && estate.campo.length > 4) {
            validar.push("hay caracteres invalidos en el campo");
        }
        return validar;
    }

    const validarCorreo = (estate, regex) => {
        const validar = [];
        if (estate.campo.length < 1) {
            validar.push('Debes llenar este campo');
        }
        if (!regex.test(estate.campo) && estate.campo.length > 1) {
            validar.push('Debe ingresar un formato de correo institucional de la universidad  ej : ejemplo@est.umss.bo');
        }

        return validar;
    }

    const validarNombre = (estate, regex) => {
        const validar = [];
        if (estate.campo.length < 1) {
            validar.push('Debes llenar este campo');
        }
        if (estate.campo.length > 30 || estate.campo.length < 3) {
            validar.push('Solo se permite un minimo de 3 caracteres y un maximo de 30 caracteres');
        }
        if ((!regex.test(estate.campo)) && (estate.campo.length > 2 && estate.campo.length < 31)) {
            validar.push('El nombre solo puede contener caracteres alfabeticos y espacios');
        }

        return validar;
    }

    const validarNombreAb = (estate, regex) => {
        const validar = [];
        if (estate.campo.length < 1) {
            validar.push('Debes llenar este campo');
        }
        if (estate.campo.length > 30 || estate.campo.length < 3) {
            validar.push('Solo se permite un minimo de 2 caracteres y un maximo de 20 caracteres');
        }
        if (!regex.test(estate.campo) && (estate.campo.length > 1 && estate.campo.length < 21)) {
            validar.push('El nombre abreviado solo puede contener caracteres alfabeticos y espacios');
        }

        return validar;
    }

    const validarOrgJur = (estate) => {
        const validar = [];
        if (estate.valido == false) {
            validar.push("Seleccione una opcion valida en este campo");
        }
        return validar;
    }

    const verificarInputs = () => {
        if (!orgJur.valido) {
            setOrgJur({ valido: false });
        }

        if (!telefono.valido) {
            setTelefono({ ...telefono, valido: false });
        }

        if (!direccion.valido) {
            setDireccion({ ...direccion, valido: false });
        }

        if (!email.valido) {
            setEmail({ ...email, valido: false });
        }

        if (!logo.valido) {
            setLogo({ ...logo, valido: false });
        }

        if (!nombre.valido) {
            setNombre({ ...nombre, valido: false });
        }

        if (!nombreAb.valido) {
            setNombreAb({ ...nombreAb, valido: false });
        }

        if (!descripcion.valido) {
            setDescripcion({ ...descripcion, valido: false });
        }
    };

    const [msg, setMsg] = useState(false);
    const formulario = useRef(null);
    const exito = () => {
        const files = Array.from(document.getElementsByTagName('input'));
        files.map((inp) => {
            inp.disabled = true;
        });
        document.getElementById('orgJur').disabled = true;
        document.getElementById('descripcion').disabled = true;
        document.getElementById('botonSub').disabled = true;
        return "#6aff00";
    };

    const onSubmit = (e) => {
        verificarInputs();
        e.preventDefault();
        if (orgJur.valido === 'true' && telefono.valido === 'true' &&
            direccion.valido === 'true' && email.valido === 'true' &&
            logo.valido === 'true' && nombre.valido === 'true' &&
            nombreAb.valido === 'true' && descripcion.valido === 'true') {
            const data = new FormData(document.getElementById('formulario'));
            data.append('eliminar', logo.eliminar);
            data.append('idGE', idGE.campo);
            fetch('api/registrarCambiosGE', {
                method: 'POST',
                body: data
            }).then((response) => {
                setMsg(true);
                const mensaje = document.getElementById('mensajeRGE');
                let color = null;
                console.log(response);
                if (response.ok) {
                    color = exito();
                    mensaje.innerHTML = "Exito al Registrar Grupo empresa";
                } else {
                    color = 'red';
                    mensaje.innerHTML = "Error al registrar Grupo empresa, intentelo de nuevo mas tarde";
                }
                document.getElementById('cardItem').style = `border-style:solid;box-shadow: 10px 10px 10px ${color}; border-color: ${color}`;
                mensaje.style = `transition: .5s ease all;border-color:  ${color}; background-color:${color};`;
                window.scroll(0, 0);
            });
        }
    };

    const nombreGE = {
        campo: document.title
    };


    if (idGE.campo == "") {
        start();
        console.log("hola mundo");
    }

    function start() {
        fetch('/api/solicitarGE', {
            method: 'POST',
            body: JSON.stringify(nombreGE),
        }).then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    let elemento = data[i];
                    if (elemento.nombre == nombreGE.campo) {
                        setID({ ...idGE, campo: elemento.idGE });
                        setNombre({ ...nombre, campo: elemento.nombre });
                        setNombreAb({ ...nombreAb, campo: elemento.nombreAb });
                        setTelefono({ ...telefono, campo: elemento.telefono });
                        setDireccion({ ...direccion, campo: elemento.direccion });
                        setEmail({ ...email, campo: elemento.email });
                        setDescripcion({ ...descripcion, campo: elemento.descripcion });
                        setLogo({ ...logo, campo: "./resources/" + elemento.logo, eliminar: "./resources/" + elemento.logo });

                        /* validarNombre(nombre, expresiones.nombre);
                        validarNombreAb(nombreAb, expresiones.nombreAb);
                        validarCorreo(email, expresiones.correo);
                        validarTelefono(telefono, expresiones.telefono);
                        validarDireccion(direccion, expresiones.direccion);
                        validarDescripcion(descripcion, expresiones.objetivo);
                        validarLogo(logo); */
                        //verificarInputs();
                        break;
                        /*[idGE','fecha_creacion', 'fecha_registro',
                        'orgJur', 'nombre', 'nombreAb', 'telefono',
                        'direccion', 'email', 'descripcion', 'logo', 'orgJur'];*/
                    }
                }
            });
    }

    const [item_back] = useState("./resources/back.png");
    const [item_save] = useState("./resources/save.png");

    return (

        <main>
            <Card id='cardItem'>
                <form ref={formulario}
                    id='formulario'
                    onSubmit={onSubmit}
                    className='formStyle'
                    method='POST'
                    encType="multipart/form-data">

                    <div className="container border">
                        <div className="row p-3">
                            <div className="col-12 p-3 h1">
                                {nombre.campo}
                            </div>
                        </div>
                        {
                            (msg) &&
                            (<ContenedorBloque >
                                <MensajeRGE id='mensajeRGE'></MensajeRGE>
                            </ContenedorBloque>)
                        }
                        <div className="row">
                            <div className="col-12 col-sm-8 border">
                                <div className="form-group">
                                    <Input estado={nombre}
                                        cambiarEstado={setNombre}
                                        regex={expresiones.nombre}
                                        nombre='nombre'
                                        placeholder='Nombre Grupo-Empresa'
                                        tipo='text'
                                        funcValidar={validarNombre} />
                                    {/* {(nombre.valido === 'false') && (<MensajeAlerta mensajeRep={validarNombre(nombre, expresiones.nombre)} />)} */}
                                </div>
                                <div className="form-group">
                                    <Input estado={nombreAb}
                                        cambiarEstado={setNombreAb}
                                        regex={expresiones.nombreAb}
                                        nombre='nombreAb'
                                        tipo='text'
                                        placeholder='Nombre Abreviado'
                                        funcValidar={validarNombreAb} />
                                    {(nombreAb.valido === 'false') && (<MensajeAlerta mensajeRep={validarNombreAb(nombreAb, expresiones.nombreAb)} />)}
                                </div>
                                <div className="form-group">
                                    <Input estado={telefono}
                                        cambiarEstado={setTelefono}
                                        nombre='telefono' tipo='number'
                                        placeholder='Telefono'
                                        maxlength={9}
                                        minlenght={7}
                                        funcValidar={validarTelefono} />
                                    {(telefono.valido === 'false') && (<MensajeAlerta mensajeRep={validarTelefono(telefono)} />)}
                                </div>
                                <div className="form-group">
                                    <Input estado={direccion}
                                        cambiarEstado={setDireccion}
                                        regex={expresiones.direccion}
                                        nombre='direccion'
                                        tipo='text'
                                        placeholder='Direccion'
                                        funcValidar={validarDireccion} />
                                    {(direccion.valido === 'false') && (<MensajeAlerta mensajeRep={validarDireccion(direccion, expresiones.direccion)} />)}
                                </div>
                                <div className="form-group">
                                    <Input estado={email}
                                        cambiarEstado={setEmail}
                                        regex={expresiones.correo}
                                        nombre='email'
                                        tipo='email'
                                        placeholder='Correo electronico'
                                        funcValidar={validarCorreo} />
                                    {(email.valido === 'false') && (<MensajeAlerta mensajeRep={validarCorreo(email, expresiones.correo)} />)}
                                </div>
                                <div>

                                </div>
                                <div className="form-group">
                                    <OrganizacionJ estado={orgJur}
                                        cambiarEstado={setOrgJur}
                                        funcValidar={validarOrgJur}
                                    ></OrganizacionJ>
                                    {(orgJur.valido === 'false') && (<MensajeAlerta mensajeRep={validarOrgJur(orgJur)} />)}


                                </div>
                                <div className="form-group">
                                    {(descripcion.valido === 'false') && (<MensajeAlerta mensajeRep={validarDescripcion(descripcion, expresiones.objetivo)} />)}
                                    <TextArea estado={descripcion}
                                        cambiarEstado={setDescripcion}
                                        regex={expresiones.objetivo}
                                        nombre='descripcion'
                                        placeholder='objetivo'
                                        funcValidar={validarDescripcion} />


                                </div>
                            </div>

                            <div className='col-12 col-sm-4 border'>
                                <div className="form-group">
                                    <InputImg estado={logo}
                                        cambiarEstado={setLogo}
                                        name='logo'
                                        funcValidar={validarLogo}
                                    />
                                    {(logo.valido === 'false') && (<MensajeAlerta mensajeRep={validarLogo(logo)} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container border">
                        <div className="row p-3">
                            <div className="col-6">
                                <Boton id='botonCan'>
                                    <img src={item_back} alt="" />
                                </Boton>
                            </div>
                            <div className="col-6">
                                <Boton id='botonSub' type='submit'>
                                    <img src={item_save} alt="" />
                                </Boton>
                            </div>
                        </div>
                    </div>
                </form>

            </Card>
        </main >

    )
}

export default EditarGE
