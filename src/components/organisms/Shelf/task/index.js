import Button from "../../../atoms/Buttom"
import { ContainerUl, LineLi, ButtonModal } from "../style"

const Task = ({ task, setShowModal }) =>
    <ContainerUl>
        <LineLi>Titulo: {task.title}</LineLi>
        <LineLi>Status: {task.status}</LineLi>
        <LineLi>Descrição: {task.description}</LineLi>
        <ButtonModal onClick={() => setShowModal()}>Detalhes</ButtonModal>
    </ContainerUl>



export default Task