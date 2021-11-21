import React from 'react'
import { Card } from '../../elementos/card'
import { Cuadro } from '../../elementos/Solicitudes'
import { Titulo } from '../../elementos/registro'

const Solicitudes = () => {
    return (
        <main>
            <Card>
                <Titulo className=' mt-3'>Solicitudes de Ingreso</Titulo>
                <Cuadro className=' mb-3'>
                    <div>
                        <label>Lionel Perez Calvin</label>
                        <button>Adminir</button>
                        <button>Rechazar</button>
                    </div>
                    <div>
                        <label>Lionel Perez Calvin</label>
                        <button>Adminir</button>
                        <button>Rechazar</button>
                    </div>
                    <div>
                        <label>Lionel Perez Calvin</label>
                        <button>Adminir</button>
                        <button>Rechazar</button>
                    </div>
                </Cuadro>        
            </Card>
        </main>
    )
}

export default Solicitudes
