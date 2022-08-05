import styled from "styled-components";

export const ContainerForm = styled.form`
    height: 100vh;
    float: right;
    box-sizing: border-box;
    background: -webkit-linear-gradient(right,#1693a5, #a0ded6);
    width: 40vw;
    box-shadow: 0.6px 0 9px gray;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`

export const LogoText = styled.h3`
    font-family: 'Roboto', sans-serif;
    background: -webkit-linear-gradient(#fff, #b6d4bb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.1s ease;
`