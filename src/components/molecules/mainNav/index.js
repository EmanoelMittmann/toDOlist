import { Navigation, NavigationChildren } from "./style";
import BtnLogout from "../../atoms/Btnlogout/index";
import { useNavigate } from "react-router-dom";

const MainNav = () => {
  const navigate = useNavigate();

  function getEmail() {
    const user = JSON.parse(localStorage.getItem("login")) || null;
    if (user === null) {
      return "teste";
    }
    return user.email;
  }

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <Navigation>
      <NavigationChildren onClick={handleClick}>
        <h3>{getEmail()}</h3>
        <BtnLogout />
      </NavigationChildren>
    </Navigation>
  );
};

export default MainNav;
