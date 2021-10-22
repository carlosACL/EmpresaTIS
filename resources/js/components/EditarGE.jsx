import React, { useRef, useState } from 'react'
import {
    ContenedorBloque,
    Titulo,
    Boton,
} from './../elementos/registro';
import { Card } from '../elementos/card';


const EditarGE = (props) => {

    const [orgJur, setOrgJur] = useState({ valido: null });
    const [telefono, setTelefono] = useState({ campo: '', valido: null });
    const [direccion, setDireccion] = useState({ campo: '', valido: null });
    const [email, setEmail] = useState({ campo: '', valido: null, existe: 'false' });
    const [imagen, setImagen] = useState({ valido: null });
    const [nombre, setNombre] = useState({ campo: '', valido: null, existe: 'false' });
    const [nombreAb, setNombreAb] = useState({ campo: '', valido: null });
    const [descripcion, setDescripcion] = useState({ campo: '', valido: null });

    const expresiones = {
        nombre: /^[a-zA-Z\s]{3,30}$/,
        nombreAb: /^[a-zA-Z\s]{2,20}$/,
        correo: /^[a-zA-Z0-9_.+-]+@est.umss.edu$/,
        telefono: /^\d{7,8}$/,
        direccion: /^[a-zA-ZÀ-ÿ0-9\,\.\#\-\_\s]{5,100}$/,
        objetivo: /^[a-zA-ZÀ-ÿ0-9\,\.\s]{10,100}$/,
    };


    const validarDireccion = (estate, regex) => {
        const validar = [];
        if(estate.campo.length <1){
            validar.push("Debe llenar este campo");
        }
        if(estate.campo.length < 5 || estate.campo.length>100){
            validar.push("la direccion debe contener un minimo de 5 caracteres y un maximo de 100 caracteres");
        }
        if(!regex.test(estate.campo) && estate.campo.length>4){
            validar.push("hay caracteres invalidos en el campo");
        }
        return validar;
    }

    const validarDescripcion = (estate, regex) => {
        const validar = [];
        if(estate.campo.length <1){
            validar.push("Debe llenar este campo");
        }
        if(estate.campo.length < 10 || estate.campo.length>100){
            validar.push("el objetivo debe contener un minimo de 10 caracteres y un maximo de 100 caracteres");
        }
        if(!regex.test(estate.campo) && estate.campo.length>4){
            validar.push("hay caracteres invalidos en el campo");
        }
        return validar;
    }

    const validarCorreo = (estate, regex) => {
        const validar = [];
        if(estate.campo.length<1){
            validar.push('Debes llenar este campo');
        }
        if(!regex.test(estate.campo) &&  estate.campo.length>1 ){
            validar.push('Debe ingresar un formato de correo institucional de la universidad  ej : ejemplo@est.umss.bo');
        }

        if(estate.existe === 'false' && (estate.campo.length>12 && estate.campo.length < 25)){
            validar.push('el email ya esta en uso');
        }

        return validar;
    }

    const validarNombre = (estate, regex) => {
        const validar = [];
        if(estate.campo.length<1){
            validar.push('Debes llenar este campo');
        }
        if(estate.campo.length>30 || estate.campo.length<3){
            validar.push('Solo se permite un minimo de 3 caracteres y un maximo de 30 caracteres');
        }
        if((!regex.test(estate.campo)) && (estate.campo.length>2 && estate.campo.length < 31) ){
            validar.push('El nombre solo puede contener caracteres alfabeticos y espacios');
        }
        if(estate.existe === 'false' && (estate.campo.length>2 && estate.campo.length < 31)){
            validar.push('el nombre ya esta en uso');
        }

        return validar;
    }

    const validarNombreAb = (estate, regex) => {
        const validar = [];
        if(estate.campo.length<1){
            validar.push('Debes llenar este campo');
        }
        if(estate.campo.length>30 || estate.campo.length<3){
            validar.push('Solo se permite un minimo de 2 caracteres y un maximo de 20 caracteres');
        }
        if(!regex.test(estate.campo) && (estate.campo.length>1 && estate.campo.length < 21) ){
            validar.push('El nombre abreviado solo puede contener caracteres alfabeticos y espacios');
        }
        if(estate.existe === 'false' && (estate.campo.length>1 && estate.campo.length < 21)){
            validar.push('ese nombre abreviado ya esta en uso');
        }

        return validar;
    }

    const validarOrgJur = (estate) => {
        const validar = [];
        if(estate.valido === 'false'){
            validar.push("Seleccione una opcion valida en este campo");
        }
        return validar;
    }

    const verificarInputs = () => {
        if(!orgJur.valido){
            setOrgJur({valido:'false'});
        }

        if(!telefono.valido){
            setTelefono({...telefono, valido:'false'});
        }

        if(!direccion.valido){
            setDireccion({...direccion, valido:'false'});
        }

        if(!email.valido){
            setEmail({...email, valido:'false'});
        }

        if(!imagen.valido){
            setImagen({valido:'false'});
        }

        if(!nombre.valido){
            setNombre({...nombre, valido:'false'});
        }

        if(!nombreAb.valido){
            setNombreAb({...nombreAb, valido:'false'});
        }

        if(!descripcion.valido){
            setDescripcion({...descripcion, valido:'false'});
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
            imagen.valido === 'true' && nombre.valido === 'true' &&
            nombreAb.valido === 'true' && descripcion.valido === 'true') {
            const data = new FormData(document.getElementById('formulario'));
            fetch('api/registrarGrupoEmpresa', {
                method: 'POST',
                body: data
            });
        }
    };



    return (

        <main>
            <Card>
                <form action="">

                    <div className="container border">
                        <div className="row p-3">
                            <div className="col-12 p-3">
                                MythicalSoft
                                {/*datos*/}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 border">
                                <div className="form-group">
                                    <label htmlFor="name_input">Nombre Grupo-Empresa</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id='name_input'
                                        placeholder='Nombre Grupo-Empresa'
                                        regex={expresiones.nombre}
                                        onSubmit={validarNombre}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_ab_input">Nombre Abreviado</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id='name_ab_input'
                                        placeholder='Nombre Abreviado'
                                        regex={expresiones.nombreAb}
                                        onSubmit={validarNombreAb}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tel_input">Telefono</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id='tel_input'
                                        placeholder='Telefono'
                                        maxLength={8}
                                        minLength={7}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dir_input">Direccion</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id='dir_input'
                                        placeholder='Direccion'
                                        regex={expresiones.direccion}
                                        onSubmit={validarDireccion}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Correo Electronico: </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder='Correo electronico'
                                        regex={expresiones.correo}
                                        onChange={setEmail}
                                        onSubmit={validarCorreo}
                                        required
                                    />
                                </div>
                                <div>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="org_jur_input">Select list:</label>
                                    <select className="form-control" id="org_jur_input">
                                        <option value="" disabled>Seleccione una Opcion...</option>
                                        <option value="Sociedad de Responsabilidad limitada">S.R.L.</option>
                                        <option value="Sociedad Colectiva">Sociedad Colectiva</option>
                                        <option value="Sociedad Anonima">Sociedad Anonima</option>
                                        <option value="Sociedad Anonima Mixta">Sociedad Anonima Mixta</option>
                                    </select>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="description_input">Descripcion</label>
                                    <textarea
                                        className="form-control"
                                        id='description_input'
                                        regex={expresiones.objetivo}
                                        onChange={setDescripcion}
                                        placeholder="objetivo"
                                        cols="30"
                                        rows="10"
                                        onSubmit={validarDescripcion}
                                        required
                                    />

                                </div>
                            </div>

                            <div className='col-4 border'>
                                <div className="form-group">
                                    <img
                                        className="w-10 mx-auto d-block img-fluid"
                                        src="./resources/logoDefecto.png"
                                        alt="..."
                                        onChange={setImagen}
                                    />
                                    <input type="file" className="form-control-file border" id="logo_input" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="container border p-3">
                        <div className="row p-3">
                            <div className="col-6">
                                <button type="submit" className="btn btn-primary">
                                    Cancelar
                                </button>
                            </div>
                            <div className="col-6">
                                <button type="submit" className="btn btn-primary">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

            </Card>
        </main>

    )
}

export default EditarGE
