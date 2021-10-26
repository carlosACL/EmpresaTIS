import styled from "styled-components"
import { colorPrimary } from "../parametros/colores";

const FooterStyle = styled.footer`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    text-shadow: 0 0 black;
    background-color: rgb(${colorPrimary.r},${colorPrimary.g},${colorPrimary.b});
`;

const Label = styled.label`
    margin:10px
`;

export {FooterStyle, Label};