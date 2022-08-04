import { ContainerTask } from './style'
import BtnAdd from '../../atoms/BtnAdd/index'
import InputSelect from '../../atoms/InputSelect'
import InputText from '../../atoms/InputText'

export default ({ onAdd, onFilter, onFiltertitle }) =>
  <ContainerTask>
    <InputSelect onChange={e => onFilter(e.target.value)} />
    <InputText onChange={e => onFiltertitle(e.target.value)} placeholder="Busque por titulo"/>
    <BtnAdd onClick={onAdd} />
  </ContainerTask>
