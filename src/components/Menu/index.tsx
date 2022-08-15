import { Link } from "react-router-dom";
import * as C from "./styled";

export const Menu = () => {
  return (
    <C.Container>
      <li>
        <Link to="#">HEALTHY RECIPES</Link>
      </li>
      <li>
        <Link to="#">BLOG</Link>
      </li>
      <li>
        <Link to="/Signin">JOIN</Link>
      </li>
      <li className="register">
        <Link to="/step1">REGISTER</Link>
      </li>
    </C.Container>
  );
};
