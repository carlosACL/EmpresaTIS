import {useState, useEffect} from 'react'
import { ContenedorTab } from '../elementos/TabGE'
import Espacio from './EspacioDeAsesoramiento/Espacio'

const EspacioDeAsesoramiento = () => {

  const [datosGE, setDatosGE] = useState(null)
    useEffect(() => {
      const datosGE = new FormData();
      datosGE.append('idUsuario', sessionStorage.getItem('id'));
      datosGE.append('nombreGE', nombreGE);  
      fetch('api/obtenerDatosGrupoEmpresa',{
        method:'POST',
        body:datosGE
      })
      .then((response) => response.json())
      .then((json) => {
        setDatosGE(json);
      })
    }, [])

    return (
        <main>
            {(datosGE) && ((datosGE.mensaje) ? (<h1 className=' mt-5'>{ datosGE.mensaje }</h1>)
            :
            (<ContenedorTab>
              <nav className=' w-100 d-flex justify-content-center'>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Grupo Empresa</a>
                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Calendario</a>
                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Espacio de Asesoramiento</a>
              </div>
            </nav>
            <div id="contenido-GE" className="tab-content  d-flex justify-content-center" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus corporis eaque dolorem ullam, quasi magni vel cumque facere animi maiores minima id similique accusantium iste, deleniti neque praesentium cum ratione?
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at inventore quam quasi, minima odit nemo ex iusto officiis esse veritatis sit rerum repudiandae reiciendis voluptates dolorem cumque, quae harum?
              </div>
                <div className="tab-pane fade w-100" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    {(datosGE) && (<Espacio id={ datosGE.duenio } />)}
                </div>
            </div>
            </ContenedorTab>))}
      </main>
    )
}

export default EspacioDeAsesoramiento
