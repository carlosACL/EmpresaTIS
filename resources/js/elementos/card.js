import styled from "styled-components";
import {colorPrimary} from "./colores";

const Card = styled.div`
    max-width: 700px;
    margin-top: 5%;
    text-align: center;
    transition: .5s ease all;
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.7);
    border-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.4);
    border-radius: 30px;
    box-shadow: 10px 10px 10px;
    @media (max-width:800px){
        width: 100%;
        max-width: 800px;
    }
`;

const Fondo = styled.img`
    display: block;
    opacity: 0.3;
    position: fixed;
    z-index: -100;
    width: 100%;
    justify-content: center;
    object-fit: cover;
`;

export {Card, Fondo};