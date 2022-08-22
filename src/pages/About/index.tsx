import { Navigate } from "react-router-dom";
import { useFormContext } from "../../hooks/ContextHook";
import { DashBord } from "../../styles/themes/DashbordTheme";
import * as C from "./styled";

export const About = () => {
  const { state } = useFormContext();

  return (
    <>
      <DashBord>
        <C.Container>
          <C.SubContainer>
            <div className="infor">
              <h2>About {state.name}</h2>
              <div className="gridArea">
                <div>
                  <h3>Full Name:</h3>
                  <p>{state.name}</p>
                </div>
                <div>
                  <h3>Birth date:</h3>
                  <p>{state.birthDate}</p>
                </div>
                <div>
                  <h3>CPF:</h3>
                  <p>{state.CPF}</p>
                </div>
                <div>
                  <h3>E-mail:</h3>
                  <p>{state.email}</p>
                </div>
                <div>
                  <h3>State:</h3>
                  <p>{state.state}</p>
                </div>
                <div>
                  <h3>Zip code:</h3>
                  <p>{state.zipCode}</p>
                </div>
                <div>
                  <h3>City:</h3>
                  <p>{state.city}</p>
                </div>
                <div>
                  <h3>District:</h3>
                  <p>{state.district}</p>
                </div>
                <div>
                  <h3>road :</h3>
                  <p>{state.street}</p>
                </div>
                <div>
                  <h3>Number°:</h3>
                  <p>{state.houseNumber}</p>
                </div>
              </div>
            </div>
          </C.SubContainer>
        </C.Container>
      </DashBord>
    </>
  );
};
