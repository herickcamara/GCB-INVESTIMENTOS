import * as C from "./styled";
import { ChangeEvent, useEffect } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../themes/themeForm";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/ContextHook";
import { FormAction } from "../../Reducer/useReduce";
import { filterData } from "../../helpers/filterDate";

export const Step1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const { setName, dateNacimento, cpf, setLastName } = state;

  useEffect(() => {
    setcurrent();
  }, []);

  const setcurrent = () => {
    dispatch({
      type: FormAction.setCurrentStep,
      payload: 1,
    });
  };
  const handleNextStep = () => {
    const next =
      !cpf || !setName || !setLastName || !dateNacimento ? true : false;

    if (next) {
      return alert("Preencha todos os compos");
    }
    if (filterData(dateNacimento) < 18) {
      return alert("conteudo minimo para 18 anos");
    }
    navigate("/step2");
  };
  const handleCPFChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.cpf,
      payload: e.target.value,
    });
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
          CPF: <br />
          <Input
            autoFocus={true}
            type="text"
            value={cpf}
            handleOnChange={handleCPFChange}
            placeHolder="CPF"
          />
        </label>
        <label>
          Seu nome: <br />
          <Input
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

        <Button onClick={handleNextStep} label="Proximo →" />
      </C.Container>
    </ThemeForm>
  );
};
