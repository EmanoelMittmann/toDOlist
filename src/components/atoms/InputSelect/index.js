import { InputSelectContainer, InputSelectContainerPlaceholder, InputSelectOption } from './style'

const InputSelect = ({ onChange, value }) =>
    <InputSelectContainer onChange={onChange} value={value}>
        <InputSelectContainerPlaceholder disabled selected>
            <p>Status</p>
        </InputSelectContainerPlaceholder>
        <InputSelectOption value="Concluido">
            Concluido
        </InputSelectOption>
        <InputSelectOption value="Fazendo" >
            Fazendo
        </InputSelectOption>
        <InputSelectOption value="Pendente">
            Pendente
        </InputSelectOption>
    </InputSelectContainer>


export default InputSelect