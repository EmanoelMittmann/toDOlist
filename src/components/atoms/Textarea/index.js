import React from 'react'
import { ContainerText } from './style'

const Textarea = ({ value, onChange }) =>

  <ContainerText
    onChange={onChange}
    value={value}
  />


export default Textarea