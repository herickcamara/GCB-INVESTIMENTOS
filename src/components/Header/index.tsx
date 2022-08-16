import { ReactNode } from "react";
import { Link } from "react-router-dom";
import * as C from "./styled";

type Prop = {
  title: string;
  children?: ReactNode;
};
export const Header = ({ title, children }: Prop) => {
  return (
    <C.Container>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      <div className="Menu">{children}</div>
    </C.Container>
  );
};
