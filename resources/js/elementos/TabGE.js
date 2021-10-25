import styled from "styled-components";
import { colorSecundary, colorPrimary } from "../parametros/colores";

const ContenedorTab = styled.div`
    margin-top: 100px;
    width: 100%;
    @media (max-width: 992px){
        margin-top: 10px;
    } 

    nav div a {
        transition: .3s ease all;
        color: black;
        border-radius: 10px;
        :hover{
            border-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
            background-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
            color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
        }
    }
`;

export {ContenedorTab};