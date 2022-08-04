import { ContainerForm, LogoText } from './style'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputText from '../../atoms/InputText/index'
import Button from '../../atoms/Buttom'
import axios from 'axios'

const Login = () => {

    const navigate = useNavigate()

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [error, setError] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .get(`/users`)
            .then((response) => {
                
                    if (response.data.users[0].email === Email &&
                        response.data.users[0].password === Password) {
                        localStorage.setItem("login", JSON.stringify({
                            userLogin: true,
                            email: response.data.users[0].email
                        })
                        )
                        navigate('/home')
                    }
                    setError("Email ou Senha Invalidos")
                
            })
            .catch(error => setError(error.response.data.message))
    }

    return (
        <>
            <ContainerForm onSubmit={handleSubmit}>
                <LogoText>Todo List</LogoText>
                <InputText
                    onChange={e => setEmail(e.target.value)}
                    value={Email}
                />
                <InputText
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                    placeholder='Senha'
                    value={Password}
                />
                <Button
                    type="submit"
                />
                <p style={{color:"red", fontWeight: "bold"}}>{error}</p>
            </ContainerForm>
        </>
    )
}

export default Login