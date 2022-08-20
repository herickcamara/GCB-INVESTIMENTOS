import { useState } from "react";
import { Link } from "react-router-dom";
import * as C from "./styled";
import close from "../../styles/assets/close-small-svgrepo-com.svg";
import menu from "../../styles/assets/menu-svgrepo-com.svg";
import { Auth } from "../../helpers/auth";
import { useFormContex } from "../../hooks/ContextHook";
import { Button } from "../Button";

export const Menu = () => {
  let logged = Auth();

  const { state, dispatch } = useFormContex();
  const [drop, setDrop] = useState<boolean>(false);
  const handleMenuDrop = () => {
    if (drop) {
      setDrop(false);
    } else {
      setDrop(true);
    }
  };

  const isLogged = () => {
    localStorage.removeItem("@token");
    window.location.href = "/";
  };
  return (
    <C.Container>
      <C.DropsMenu onClick={handleMenuDrop}>
        <img src={drop ? close : menu} alt="" />
      </C.DropsMenu>
      {!logged && (
        <C.Ul active={drop}>
          <li>
            <Link to="">HEALTHY RECIPES</Link>
          </li>
          <li>
            <Link to="">BLOG</Link>
          </li>
          <li>
            <Link to="/Signin">JOIN</Link>
          </li>
          <li className="register">
            <Link to="/step1">REGISTER</Link>
          </li>
        </C.Ul>
      )}
      {logged && (
        <C.Ul active={drop}>
          <li>
            <Link to={`/home/${state.setName}`}>Home</Link>
          </li>
          <li>
            <Link to={`/about/${state.setName}`}>Sobre</Link>
          </li>
          <Button onClick={isLogged} label="Sair" />
        </C.Ul>
      )}
    </C.Container>
  );
};
