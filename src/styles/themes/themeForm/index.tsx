import { ReactNode } from "react";
import * as C from "./styled";
import bgImg from "../../assets/newservices.svg";
import { SiderbarItem } from "../../../components/SidebarItem";
import { useFormContext } from "../../../hooks/ContextHook";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";
type Props = {
  children: ReactNode;
  title: string;
  desc?: string;
};
export const ThemeForm = ({ title, desc, children }: Props) => {
  const { state } = useFormContext();

  return (
    <C.Containe img={bgImg}>
      <Header title=" Healthy Food">
        <Link to="/signin">
          <Button label="Login" />
        </Link>
      </Header>
      <C.Area>
        <div className="container">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <C.Steps>
          <C.Sidebar>
            <SiderbarItem
              active={state.currentStep >= 1}
              title="Step"
              description="Personal data"
              path="/step1"
              icon="1"
            />
            <SiderbarItem
              title="Step"
              description="Address"
              path="/step2"
              icon="2"
              active={state.currentStep >= 2}
            />
            <SiderbarItem
              title="Step"
              description="confirm address"
              path="/step3"
              icon="3"
              active={state.currentStep >= 3}
            />
            <SiderbarItem
              title="Step"
              description="Finalize registration"
              path="/step4"
              icon="4"
              active={state.currentStep >= 4}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Containe>
  );
};
