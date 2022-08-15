import * as C from "./styled";
import React, { ChangeEvent } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/ContextHook";
import { FormAction } from "../../Reducer/useReduce";

export const SignUp = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    navigate("/Signin");
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch({
      type: FormAction.setName,
      payload: e.target.value,
    });
  };

  return (
    <ThemeForm
      title="Healthy Food Register"
      desc="Sign up to enter and start your diet"
      handleClick={() => ""}
    >
      <C.Container>
        <p>Passo 1/3</p>
        <h2>Vamos começar com seu nome e sobrenome</h2>
        <p>Preencha o campos abaixo com seu nome e sobrenome</p>
        {state.setName}
        <hr />

        <label>
          Seu nome: <br />
          <Input
            autoFocus={true}
            type="text"
            value={state.setName}
            handleOnChange={handleNameChange}
            placeHolder="Nome"
          />
        </label>
        <label>
          sobrenome: <br />
          <Input value={state.setLastName} placeHolder="Sobrenome" />
        </label>

        <Button onClick={handleNextStep} bg="--color-h2" label="Proximo" />
      </C.Container>
    </ThemeForm>
  );
};
