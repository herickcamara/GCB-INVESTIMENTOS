import { useFormContext } from "../../hooks/ContextHook";
import { DashBord } from "../../styles/themes/DashbordTheme";

import * as C from "./styled";

export const DashBordHome = () => {
  const { state } = useFormContext();

  return (
    <DashBord>
      <C.Container>
        <C.SubContainer>
          <h2>Welcome, {state.name}</h2>
        </C.SubContainer>
      </C.Container>
    </DashBord>
  );
};
