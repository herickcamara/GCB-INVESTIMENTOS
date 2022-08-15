import * as C from "./styled";
import { ChangeEvent } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/ContextHook";
import { FormAction } from "../../Reducer/useReduce";
import { filterData } from "../../helpers/filterDate";

export const Step1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const { setName, dateNacimento, setLastName } = state;

  const handleNextStep = () => {
    const next = !setName || !setLastName || !dateNacimento ? true : false;
    if (next) {
      return alert("Preencha todos os compos");
    }
    if (filterData(dateNacimento) < 18) {
      return alert("conteudo minimo para 18 anos");
    }
    navigate("/step2");
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setName,
      payload: e.target.value,
    });
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.setLastName,
      payload: e.target.value,
    });
  };
  const handleDataNacimento = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.dateNacimento,
      payload: e.target.value,
    });
  };

  return (
    <ThemeForm title="Register" desc="Sign up to enter and start your diet">
      <C.Container>
        <p>Passo 1/4</p>
        <h2>Vamos começar com o seu nome e sobrenome</h2>
        <p>Preencha os campos abaixo! </p>

        <hr />

        <label>
          Seu nome: <br />
          <Input
            autoFocus={true}
            type="text"
            value={setName}
            handleOnChange={handleNameChange}
            placeHolder="Nome"
          />
        </label>
        <label>
          sobrenome: <br />
          <Input
            type="text"
            value={setLastName}
            handleOnChange={handleLastNameChange}
            placeHolder="Sobrenome"
          />
        </label>
        <label>
          Date de nacimento: <br />
          <Input
            type="date"
            value={dateNacimento}
            handleOnChange={handleDataNacimento}
            placeHolder="Data de nacimentor"
          />
        </label>

        <Button onClick={handleNextStep} bg="--color-h2" label="Proximo" />
      </C.Container>
    </ThemeForm>
  );
};
