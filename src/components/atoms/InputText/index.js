import React from 'react'
import { FormGroup, FormLabel, FormInput } from './style'

const InputText = ({type="text", placeholder="E-mail", onChange, value}) => {
  return (
    <FormGroup>
      <FormInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </FormGroup>
    
  )
}

export default InputText