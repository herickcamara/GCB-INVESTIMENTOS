import { useFormContex } from "../../hooks/ContextHook";
import { DashBord } from "../../styles/themes/DashbordTheme";
import { State } from "../../types/ReducerState";
import * as C from "./styled";

export const About = () => {
  const { state } = useFormContex();

  return (
    <DashBord>
      <C.Container>
        <C.SubContainer>
          <div className="infor">
            <h2>Sobre {state.setName}</h2>
            <div className="gridArea">
              <div>
                <h3>NOME COMPLETO:</h3>
                <p>
                  {state.setName} {state.setLastName}
                </p>
              </div>
              <div>
                <h3>Data de nacimanto:</h3>
                <p>{state.dateNacimento}</p>
              </div>
              <div>
                <h3>CPF:</h3>
                <p>{state.cpf}</p>
              </div>
              <div>
                <h3>E-mail:</h3>
                <p>{state.email}</p>
              </div>
              <div>
                <h3>UF:</h3>
                <p>{state.uf}</p>
              </div>
              <div>
                <h3>CEP:</h3>
                <p>{state.zipCode}</p>
              </div>
              <div>
                <h3>CIDADE:</h3>
                <p>{state.city}</p>
              </div>
              <div>
                <h3>BARRIO:</h3>
                <p>{state.district}</p>
              </div>
              <div>
                <h3>RUA:</h3>
                <p>{state.street}</p>
              </div>
              <div>
                <h3>NUMERO°:</h3>
                <p>{state.numberHouse}</p>
              </div>
            </div>
          </div>
        </C.SubContainer>
      </C.Container>
    </DashBord>
  );
};
