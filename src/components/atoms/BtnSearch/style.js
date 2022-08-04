import styled from "styled-components";

export const ButtonSearch = styled.button`
    border: none;
    background-color:#7ececa;
    border-radius: 5px;
    cursor:pointer;
    height:4.5vh;
    margin: 10px;
    transition:all 300ms ease;
    width:2.6em;

    :hover{
        opacity: 0.5;
    }

    i{
        font-size:1em;
        color: white;
    }
    @media screen and (min-width: 620px){
        width:2.4em;
    }
`