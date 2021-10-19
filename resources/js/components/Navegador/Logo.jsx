import React from 'react'
import { ItemNav, Img } from '../../elementos/navegador';

const Logo = (link) => {

    const logo = './resources/LOGO.png';

    return (
        <div className=' mr-3'>
            <a href={ link }>
                <Img src={ logo } />
            </a>
        </div>
    )
}

export default Logo;
