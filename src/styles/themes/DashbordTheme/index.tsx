import { ReactNode } from "react";

import { Header } from "../../../components/Header";
import { Menu } from "../../../components/Menu";
import * as C from "./styled";

type Props = {
  children: ReactNode;
};

export const DashBord = ({ children }: Props) => {
  return (
    <>
      <C.Container>
        <Header bg="var(--color-h2)" title={"healthy Food"}>
          <Menu />
        </Header>

        <C.SubContainer>{children}</C.SubContainer>
      </C.Container>
    </>
  );
};
