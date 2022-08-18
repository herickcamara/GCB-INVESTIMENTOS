import { useForm } from "../../hooks/ContextHook";
import { DashBord } from "../../styles/themes/DashbordTheme";
import { State } from "../../types/ReducerState";
import * as C from "./styled";

export const DashBordHome = () => {
  const { state } = useForm();
  return (
    <DashBord>
      <C.Container>
        <C.SubContainer>
          <h1>Seja Bem-Vindo, {state.setName}</h1>
        </C.SubContainer>
      </C.Container>
    </DashBord>
  );
};
