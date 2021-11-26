import { useState, useRef, useEffect } from 'react'
import { MarcoIcono, ContenedorElemento } from '../../elementos/espacioAsesoramient'
import { faFolder, 
         faFolderOpen, 
         faPlus, 
         faMinus, 
         faFilePdf, 
         faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Elemento = ({contenido}) => {

    const [desplegado, setDesplegado] = useState(false);
    const [desplegadoNE, setDesplegadoNE] = useState(false);

    const refSelect = useRef(null);
    const [valorSelect, setValorSelect] = useState("Carpeta");

    const onChangeSelect  = () => {
        setValorSelect(refSelect.current.value);
    }

    const desplegar = () => {
        setDesplegado(!desplegado);
        const desp = document.getElementById('id'+contenido.idElemento);
        desp.classList.toggle("nuevoDebate--ocultar");
    }

    const desplegarNE = () => {
        setDesplegadoNE(!desplegadoNE);
        const desp = document.getElementById('idNT'+contenido.idElemento);
        desp.classList.toggle("nuevoDebate--ocultar");
    }

    const construirHijo = (dato) => (<Elemento contenido={dato} />); 

    return (
        <div className='d-block ml-2 border-left border-dark pl-2'>
            {(contenido.tipo == 'carpeta') && (<>
                <ContenedorElemento onClick={ desplegar }>
                    <MarcoIcono icon={ (!desplegado) ? faFolder:faFolderOpen }/>
                    <div>{ contenido.nombre }</div>
                    <MarcoIcono icon={ (!desplegado) ? faPlus:faMinus }/>
                </ContenedorElemento>
                <div id={ 'id'+contenido.idElemento } className=' nuevoDebate--ocultar'>
                    {(contenido.hijos.length>0) && 
                    contenido.hijos.map((datos) => construirHijo(datos))}
                    <ContenedorElemento onClick={ desplegarNE } >
                        <MarcoIcono icon={ (!desplegadoNE) ? faPlus:faMinus }/>
                        <div className=' text-success'>Crear Nuevo elemento</div>
                    </ContenedorElemento>
                    <div id={ 'idNT'+contenido.idElemento } className='nuevoDebate--ocultar'>
                        <div className=' d-flex justify-content-md-start align-items-center'>
                            <select  ref={refSelect} onChange={ onChangeSelect }>
                                <option>Carpeta</option>
                                <option>Link</option>
                                <option>Pdf</option>
                            </select>
                            {(valorSelect == 'Carpeta') && <input placeholder='nombre' type='text'/>}
                            {(valorSelect == 'Pdf') && <><input placeholder='nombre' type='text'/>
                                                         <input type='file' accept="application/pdf"/></>}
                            {(valorSelect == 'Link') && <><input placeholder='nombre' type='text'/>
                                                         <input placeholder='link' type='url'/></>}
                            <button>Crear</button>
                        </div>
                    </div>
                </div>
            </>)}
            {(contenido.tipo == 'link') && (<ContenedorElemento>
                <MarcoIcono icon={ faExternalLinkAlt }/><a href={ contenido.link } target='blank'>{ contenido.nombre }</a>
            </ContenedorElemento>)}
            {(contenido.tipo == 'pdf') && (<ContenedorElemento>
                <MarcoIcono icon={ faFilePdf } /><div>{ contenido.nombre }</div><MarcoIcono icon={ faPlus }/>
            </ContenedorElemento>)}
        </div>
    )
}

export default Elemento
