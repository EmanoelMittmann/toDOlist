import { ContainerTask } from './style'
import BtnAdd from '../../atoms/BtnAdd/index'
import InputSelect from '../../atoms/InputSelect'

export default ({ onAdd, onFilter }) =>
  <ContainerTask>
    <InputSelect onChange={e => onFilter(e.target.value)} />
    <BtnAdd onClick={onAdd} />
  </ContainerTask>
