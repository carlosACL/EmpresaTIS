import {useRef, useState} from 'react';

const RegistroGE = () => {

    const imagenCarg = useRef(null);
    const telf = useRef(null);

    telf.current.oninvalid = (e) => {
        e.target.setCustomVality("");
        
    }
    

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

    const convertirDig = (n) => {
        return (n < 10) ? '0'+n : n;
    }

    const date = new Date();
    const [dia, mes, anio] = [convertirDig(date.getDate()), 
                                convertirDig(date.getMonth()+1),
                                    convertirDig(date.getFullYear())];
    const fecha = `${anio}-${mes}-${dia}`;


    return (
        <div className="">
                <div className='container p-5 tarjeta shadow-lg'>
                <h1 className='tituloRGE'>Registro Grupo-Empresa</h1>
                    <div className=" d-flex">

                        <div className='text-left'>
                            <div className=' '>
                                <h5 className=' '>Fecha de Registro</h5>
                                <input className=' m-3 inputRGE' type='date' value={fecha} max={fecha} min='1999-01-01'></input> 
                            </div>
                            <div className=' '>
                                <h5 className='text-left'>Tipo de Organizacion Juridica</h5>
                                <div className="elementCenter">
                                    <select className='m-3 inputRGE'>
                                        <option value="">---Seleccione una opcion---</option>
                                        <option value="Sociedad de Responsabilidad Limitada">Sociedad de Responsabilidad Limitada</option>   
                                        <option value="Sociedad Constituida en el extranjero">Sociedad Constituida en el extranjero</option> 
                                        <option value="Sociedad Colectiva">Sociedad Colectiva</option> 
                                        <option value="Sociedad Anonima">Sociedad Anonima</option>
                                        <option value="Sociedad Anonima Mixta">Sociedad Anonima Mixta</option>  
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='imagenGERC'>
                            <img id='imagenGER' className='mb-2' src={logo} alt="" />
                            <input ref={imagenCarg} onChange={onButtonClick} className='imagenSinTexto'  type="file" />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-left'>Datos de la Grupo-Empresa</h5>
                        <div className=' d-flex'>
                            <div className='text-left w-100'>
                                <input className='m-2 w-75 inputRGE' type="text" placeholder='nombre de la grupo empresa'/>
                                <input className='m-2 inputRGE' type="text" placeholder='nombre abreviado'/><br/>
                                <input ref={telf} className='m-2 inputRGE' type="number" minLength='7' maxLength='8' placeholder='telefono' required/>
                            </div>
                            <div className='text-right'>
                                <input className='w-100 inputRGE' type="text" placeholder='direccion'/><br/>
                                <div className='d-flex m-2'>
                                    <input className='inputRGE'type="text" placeholder='correo electronico'/><br/>
                                    <label className='h5'>@est.umss.edu</label>
                                </div>
                            </div>
                        </div>
                        <div className='miTextArea'>
                            <textarea className='m-2' placeholder='Objetivo'></textarea>
                        </div>
                    </div>
                    <button className='btn botonRGE'>Registrar</button>   
                </div>
        </div>
    )
}

export default RegistroGE
