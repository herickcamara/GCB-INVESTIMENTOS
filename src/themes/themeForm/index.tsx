import { ReactNode } from "react";
import * as C from "./styled";

type Props = {
  children: ReactNode;
  title: string;
  desc: string;
  handleClick: () => void;
};
export const ThemeForm = ({ title, desc, children, handleClick }: Props) => {
  return (
    <C.Containe>
      <h1 onClick={handleClick}>← Voltar</h1>
      <C.Area>
        <div className="container">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <C.Steps>
          <C.Sidebar></C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Containe>
  );
};
