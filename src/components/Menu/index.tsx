import { useState } from "react";
import { Link } from "react-router-dom";
import * as C from "./styled";
import close from "../../assets/close-small-svgrepo-com.svg";
import menu from "../../assets/menu-svgrepo-com.svg";
export const Menu = () => {
  const [drop, setDrop] = useState<boolean>(false);
  const handleMenuDrop = () => {
    if (drop) {
      setDrop(false);
    } else {
      setDrop(true);
    }
  };
  return (
    <C.Container>
      <C.DropsMenu onClick={handleMenuDrop}>
        <img src={drop ? close : menu} alt="" />
      </C.DropsMenu>
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
    </C.Container>
  );
};
