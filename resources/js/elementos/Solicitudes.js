import styled from "styled-components";
import { colorPrimary } from "../parametros/colores"

const Cuadro = styled.div`
    border-style: solid;
    border-color: black;
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
    overflow-y: scroll;
    display: block;
    margin: 30px;
`;

export {Cuadro};

