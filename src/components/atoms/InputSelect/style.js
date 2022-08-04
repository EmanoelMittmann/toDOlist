import styled from "styled-components";

export const InputSelectContainer = styled.select`
    background-color: #fff;
    border:none;
    height: 3.2em;
    width: 20em;
    border-radius: 5px;
    margin:10px;
    color:gray;
    text-align: center;
    letter-spacing:1px;

    :focus-within{
    outline: none;
    }

    ::placeholder{
    text-align:center;
    font-family: 'Roboto', sans-serif;
    font-weight: medium;
    }
`
export const InputSelectOption = styled.option`
    border:none;
    color:black;
    font-size: 1em;
    font-weight: 500;
`

export const InputSelectContainerPlaceholder = styled.option`
    p{
        text-align:center;
        font-family: 'Roboto', sans-serif;
        font-weight: medium;
        letter-spacing: 1px;
    }
`