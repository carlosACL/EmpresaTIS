import styled from "styled-components";
import { colorPrimary } from "../parametros/colores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MarcoIcono = styled(FontAwesomeIcon)`
    font-size: 15px;
`;

const ContenedorElemento = styled.div`
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    cursor: default;
    user-select: none;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: start;
    gap: 5px
`;

const Backgroundesp = styled.div`
    margin-top: 30px;
    padding: 30px;
    border-style: double;
    width: 100%;
    background-color: rgb(${colorPrimary.r},${colorPrimary.g},${colorPrimary.b});
`;

export { MarcoIcono,
         ContenedorElemento,
         Backgroundesp };