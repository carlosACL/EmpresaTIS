import React, { useRef } from 'react'
import { InputStyle } from '../../elementos/editarGE';
import MensajeAlerta from './MensajeAlerta';
import PropTypes from 'prop-types'
import { constant } from 'lodash';

const Input = ({ estado, cambiarEstado, tipo, nombre, placeholder, regex, funcValidar }) => {

    const ref = useRef(null);
    const onChange = () => {
        cambiarEstado({
            ...estado, campo: (ref.current.value !== ' ') ?
                ref.current.value : ''
        });
        validacion();
    };

    const validacion = () => {
        if (regex) {
            /* const elem = document.getElementById({ nombre });
            var style = {
                border-botton-color: "#6aff00 !important";
        }; */
            if (regex.test(estado.campo)) {
                cambiarEstado({ ...estado, valido: 'true' });
                /* elem.style.border-bottom-color = "#6aff00 !important"; */

            } else {
                cambiarEstado({ ...estado, valido: 'false' });
                /* elem.style.border-bottom-color = "red !important"; */
            }
        }
    };

    return (
        <>
            <InputStyle type={tipo}
                onChange={onChange}
                placeholder={placeholder}
                name={nombre}
                id={nombre}
                ref={ref}
                value={estado.campo}
                onBlur={validacion}
                valido={estado.valido}
                onSubmit={validacion}
                onChange={validacion}
            />
            {/* <div id='error'>

            </div> */}
            {/* {(estado.valido === 'false') && (<MensajeAlerta mensajeRep={funcValidar(estado, regex)} />)} */}

        </>
    )
}

Input.propTypes = {
    estado: PropTypes.object,
    cambiarEstado: PropTypes.func,
    tipo: PropTypes.string,
    nombre: PropTypes.string,
    placeholder: PropTypes.string,
    funcValidar: PropTypes.func
}

export default Input;
