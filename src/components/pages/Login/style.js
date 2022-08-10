import styled from "styled-components";

export const ContainerForm = styled.div`
    display:flex;
    justify-content:right;
`;

export const ContainerChildrenForm = styled.form`
  height: 100%;
  box-sizing: border-box;
  position: fixed;
  background: -webkit-linear-gradient(right, #1693a5, #a0ded6);
  width: 45%;
  box-shadow: 0.6px 0 9px gray;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const LogoText = styled.h3`
  font-family: "Roboto", sans-serif;
  background: -webkit-linear-gradient(#fff, #b6d4bb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.1s ease;
`;
