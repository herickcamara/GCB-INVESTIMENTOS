import { useForm } from "../../hooks/ContextHook";
import { DashBord } from "../../themes/DashbordTheme";
import { State } from "../../types/ReducerState";
import * as C from "./styled";

export const DashBordHome = () => {
  const { state } = useForm();
  return (
    <DashBord>
      <C.Container>
        <h1>ola {}</h1>
      </C.Container>
    </DashBord>
  );
};
