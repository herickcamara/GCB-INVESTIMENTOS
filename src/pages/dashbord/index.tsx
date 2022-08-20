import { useParams } from "react-router-dom";
import { useFormContex } from "../../hooks/ContextHook";
import { DashBord } from "../../styles/themes/DashbordTheme";

import * as C from "./styled";

export const DashBordHome = () => {
  const { state } = useFormContex();
  const params = useParams();
  return (
    <DashBord>
      <C.Container>
        <C.SubContainer>
          <h1>Seja Bem-Vindo, {params.slug}</h1>
        </C.SubContainer>
      </C.Container>
    </DashBord>
  );
};
