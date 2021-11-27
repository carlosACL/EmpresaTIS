import { useState, useEffect } from 'react'
import Elemento from './Elemento'
import { Backgroundesp } from '../../elementos/espacioAsesoramient'

const Espacio = () => {

    const [elementos, setElementos] = useState([]);

    useEffect(() => {
        const post = new FormData();
        post.append('nombreGE', nombreGE);
        fetch('api/obtenerCarpetasBasicas',{
            method:'POSt',
            body:post
        })
        .then((response) => response.json())
        .then((json) => {setElementos(json)})
    }, [])

    return (
        <Backgroundesp>
            {elementos.map((datos) => <Elemento contenido = {datos}/>)}
        </Backgroundesp>
    )
}

export default Espacio
