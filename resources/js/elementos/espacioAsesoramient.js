import styled from "styled-components";
import { colorPrimary, colorSecundary } from "../parametros/colores";
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
    align-items: center;
    justify-content: start;
    gap: 5px;
`;

const Backgroundesp = styled.div`
    margin-top: 30px;
    padding: 30px;
    border-style: double;
    width: 100%;
    background-color: rgb(${colorPrimary.r},${colorPrimary.g},${colorPrimary.b});
`;

const MarcoEliminar = styled(FontAwesomeIcon)`
    font-size: 15px;
    color: red;
`;

const Select = styled.select`
    font-size: 30px;
    text-align: center;
    transition: .3s ease all;
    font-size: 20px;
    color: white;
    border-style: solid;
    background-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
    border-color: black;
    :hover{
        color: black;
        border-color: black;
        background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
    }
`;

export { MarcoIcono,
         ContenedorElemento,
         Backgroundesp,
         MarcoEliminar,
         Select };