import {ButtonSubmit, FormButtom} from './style'

const Button = ({text="Enviar", ...rest}) => {
  return (
    <FormButtom>
      <ButtonSubmit {...rest}>
        {text}
      </ButtonSubmit>
    </FormButtom>
  )
}

export default Button