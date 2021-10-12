import { useRef, useState } from 'react'
import { InputImagen } from '../../elementos/registro'

const InputImg = () => {
    const imagenCarg = useRef(null);
    const [logo, setLogo] = useState("./resources/logoDefecto.png");

    const onButtonClick = () => {    
        const img = document.getElementById('imagenGER')
        const files = imagenCarg.current.files;
        console.log(imagenCarg.current.files[0])
        if(!files || !files.length){
            img.src = logo;
            return;
        }
        const image = files[0];
        const url = URL.createObjectURL(image);
        img.src = url;
    }

    return (
        <>
            <img id='imagenGER' className='mb-2' src={logo} alt="" />
            <InputImagen ref = {imagenCarg} onChange={onButtonClick} type='file'/>
        </>);
};

export default InputImg;
