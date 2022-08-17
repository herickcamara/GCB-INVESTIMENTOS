import { ReactNode } from "react";
import { Header } from "../../components/Header";
import * as C from "./styled";

type Props = {
  children: ReactNode;
};

export const DashBord = ({ children }: Props) => {
  return (
    <C.Container>
      <Header title="ola"></Header>
      <C.SubContainer>{children}</C.SubContainer>
    </C.Container>
  );
};
