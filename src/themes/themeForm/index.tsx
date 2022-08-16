import { ReactNode } from "react";
import * as C from "./styled";
import bgImg from "../../assets/newservices.svg";
import { useNavigate } from "react-router-dom";
import { SiderbarItem } from "../../components/SidebarItem";
import { useForm } from "../../hooks/ContextHook";
type Props = {
  children: ReactNode;
  title: string;
  desc?: string;
};
export const ThemeForm = ({ title, desc, children }: Props) => {
  const navigate = useNavigate();
  const { state } = useForm();
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
          <C.Sidebar>
            <SiderbarItem
              active={state.setCurrentStep >= 1}
              title="Passo"
              description="Dados Pessoais"
              path="/step1"
              icon="1"
            />
            <SiderbarItem
              title="Passo"
              description="Endereço"
              path="/step2"
              icon="2"
              active={state.setCurrentStep >= 2}
            />
            <SiderbarItem
              title="Passo"
              description="confima endereço"
              path="/step3"
              icon="3"
              active={state.setCurrentStep >= 3}
            />
            <SiderbarItem
              title="Passo"
              description="Finaliza cadastro"
              path="/step4"
              icon="4"
              active={state.setCurrentStep >= 4}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Containe>
  );
};
