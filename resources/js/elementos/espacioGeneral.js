import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colorPrimary, colorSecundary } from "../parametros/colores";


const Acordeon = styled.div`
    min-width: 600px;
    background-color: #f6f6f6;
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;

    @media (max-width:700px){
        min-width: 0;
    }
`;

const MarcoIcono = styled(FontAwesomeIcon)`
    font-size: 20px;
`;

const Panel = styled.div`
    display: grid;
    gap: 20px;
    padding: 20px;
`;

const TextArea = styled.textarea`
    resize: none;
    height: 120px;
`;

export {Acordeon, MarcoIcono, Panel, TextArea};