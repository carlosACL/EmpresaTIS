import styled from "styled-components";
import { colorSecundary, colorPrimary } from "./colores";

const Nav =  styled.nav`
    width: 100%;
    padding: 0;
    position: fixed;
    display:flex;
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
`;

const Img = styled.img`
    width: 150px;
    height: 25px;
    object-fit: cover;
`;

const ItemNav = styled.div`
    border-radius: 5px;
    text-decoration: none;
    transition: .3s ease all;

    a{
        color : rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
    }

    &:hover{
        background-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
        a {
            color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
        }
    }
`;

const ItemNavI = styled.div`
    border-radius: 5px;
    text-decoration: none;
    transition: .3s ease all;
    background-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
    a {
        color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
    }
`;

export {
        Nav,
        ItemNav,
        Img,
        ItemNavI
};