import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../../helpers/auth";
import { useFormContext } from "../../hooks/ContextHook";

import * as C from "./styled";

type Prop = {
  title: string;
  children?: ReactNode;
  bg?: string;
};
export const Header = ({ bg, title, children }: Prop) => {
  let logged = Auth();
  const { state } = useFormContext();
  return (
    <C.Container style={{ backgroundColor: bg }}>
      <Link to={"/"}>
        <h1>{title}</h1>
      </Link>
      <div className="Menu">{children}</div>
    </C.Container>
  );
};
