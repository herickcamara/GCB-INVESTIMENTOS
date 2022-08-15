import { ReactNode } from "react";
import * as C from "./styled";
import bgImg from "../../assets/newservices.svg";
import { useNavigate } from "react-router-dom";
type Props = {
  children: ReactNode;
  title: string;
  desc?: string;
};
export const ThemeForm = ({ title, desc, children }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <C.Containe img={bgImg}>
      <h1 onClick={handleClick}>Healthy Food </h1>
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
