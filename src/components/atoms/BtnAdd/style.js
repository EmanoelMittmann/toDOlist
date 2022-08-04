import styled from "styled-components";

export const ButtonAdd = styled.button`
    border: none;
    background-color:#7ececa;
    border-radius: 5px;
    width:2.6vw;
    height:4.5vh;
    transition:all 300ms ease;
    cursor:pointer;

    :hover, i:hover{
        opacity: 0.7;
    }

    i{
        display:flex;
        align-items: center;
        font-size: 2em;
        color: white;
    }

    @media screen and (min-width: 620px){
        i{
            font-size: 1.5em;
        }
        width: 2.3em ;
    }
`