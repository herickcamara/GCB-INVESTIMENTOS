import { ReactNode } from "react";
import * as C from "./styled";

type Prop = {
  title: string;
  children?: ReactNode;
};
export const Header = ({ title, children }: Prop) => {
  return (
    <C.Container>
      <h1>{title}</h1>
      <div className="Menu">{children}</div>
    </C.Container>
  );
};
