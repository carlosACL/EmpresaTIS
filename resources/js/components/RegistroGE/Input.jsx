import React, { useRef } from 'react'
import { InputStyle } from '../../elementos/registro';

const Input = ({tipo, nombre, placeholder, max, min, regex, value, maxlength, minlenght}) => {
    
    const ref = useRef(nombre);
    return (
        <>
            <InputStyle type={tipo} 
                        placeholder={placeholder} 
                        name={nombre} 
                        ref={ref}
                        value={(value) && value} 
                        min={(min) && min}
                        max={(max) && max}
                        maxLength={maxlength && parseInt(maxlength)}
                        minLength={minlenght && parseInt(minlenght)}
                        />
        </>
    )
}

export default Input;