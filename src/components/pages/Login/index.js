import { ContainerForm, LogoText } from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../../atoms/InputText/index";
import Button from "../../atoms/Buttom";
import axios from "axios";
import { IsAuth } from "../../templates/isAuth";

const Login = () => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/users`, {
        email: Email,
        password: Password,
      })
      .then((response) => {
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            email: Email 
          })
        );
        navigate("/home");
      })
      .catch((error) => setError(error.response.data.errors[0]));
  };

  return (
    <IsAuth>
      <ContainerForm onSubmit={handleSubmit}>
        <LogoText>Todo List</LogoText>
        <InputText onChange={(e) => setEmail(e.target.value)} value={Email} />
        <InputText
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Senha"
          value={Password}
        />
        <Button type="submit" />
        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
      </ContainerForm>
    </IsAuth>
  );
};

export default Login;
