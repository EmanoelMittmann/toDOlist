import { ContainerModal, MainModal, ContentModal } from "./style"
import InputSelect from '../../atoms/InputSelect/index'
import InputText from '../../atoms/InputText/index'
import Textarea from '../../atoms/Textarea'
import Button from "../../atoms/Buttom/index"
import axios from 'axios'
import { useEffect, useState } from "react"

const Modal = ({ id, setOpenModal }) => {
    const [mark, setMark] = useState("")
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    function hiddenText(e) {
        var maxChars = 150
        if( description.value.length > maxChars){
            e.preventDefault()
        }
    }

    function resetInputs() {
        setTitle("")
        setDescription("")
        setStatus("")
        setMessage("Enviado com sucesso!")
    }

    const styleParagraph = {
        fontWeight: "bold",
        color: "green",
        fontFamily: "Roboto, sans-serif"
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            title: title,
            status: status,
            description: description
        }

        id
            ? axios
                .put(`/tasks/${id}`, data)
                .then(() => resetInputs())
                .catch(error => setError(error.response.data.message))
            : axios
                .post('/tasks', data)
                .then(() => resetInputs())
                .catch(error => setError(error.response.data.message))

    }

    useEffect(() => {
        setMark(status)
    },[status])
    console.log(mark)

    useEffect(() => {
        id && axios
            .patch(`/tasks/${id}`)
            .then(response => {
                const infos = response.data
                setDescription(infos.description)
                setStatus(infos.status)
                setTitle(infos.title)
            })
            .catch(error => setError(error.response.data.message))
    }, [id])

    return (
        <ContentModal>
            <ContainerModal onSubmit={handleSubmit} >

                {id ? 'Alterando a tarefa' : 'Nova tarefa'}
                <InputText
                    type="text"
                    placeholder="Titulo"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <InputSelect
                    id={id}
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                />
                <Textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <div className="child">
                    <Button text="Cancelar" onClick={() => setOpenModal(prev => !prev)} />
                    <Button
                        text="Salvar"
                        type="submit"
                    />
                </div>
                {message && <p style={styleParagraph}>{message}</p>}
            </ContainerModal>
        </ContentModal>
    )
}

export default Modal