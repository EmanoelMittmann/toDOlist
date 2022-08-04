import styled from 'styled-components'

export const FormInput = styled.input`
   background-color: #fff;
   border:none;
   height: 3em;
   width: 20em;
   border-radius: 5px;
   margin:10px;
   margin-bottom: 15px;   

   :focus-within{
      outline: none;
   }

   ::placeholder{
      text-align:center;
      font-family: 'Roboto', sans-serif;
      font-weight: medium;
      letter-spacing: 1px;
   }
`

export const FormGroup = styled.div`
   margin-top:5px;
   text-align: center;
`


