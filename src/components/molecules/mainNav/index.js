import { Navigation, LogoText } from "./style"
import BtnLogout from '../../atoms/Btnlogout/index'
import { useNavigate } from "react-router-dom"

const MainNav = () => {

  const navigate = useNavigate()

  function getEmail() {
    const user = JSON.parse(localStorage.getItem("login"))
    return user.email
  }

  const handleClick = (e) => {
    e.preventDefault()
    localStorage.removeItem("login")
    navigate('/')
  }

  return (
    <Navigation>
      <h3>{getEmail()}</h3>
      <p onClick={handleClick}><BtnLogout /></p>
    </Navigation>
  )
}

export default MainNav