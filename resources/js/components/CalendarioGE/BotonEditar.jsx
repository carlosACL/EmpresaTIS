import { faEdit } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Icon } from '../../elementos/registro';

const BotonEditarEvt = ({evento, onClickBtm}) => {

    return(
        <Icon 
            style={{fontSize: '30px',
                    color: 'midnightblue',
                    cursor: 'pointer'}} 
            icon={faEdit}
            onClick={onClickBtm}
        />
    );
};

export default BotonEditarEvt;