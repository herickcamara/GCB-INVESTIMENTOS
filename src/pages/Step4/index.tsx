import * as C from "./styled";
import React, { ChangeEvent } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/ContextHook";
import { FormAction } from "../../Reducer/useReduce";

export const Step4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const { email, setName, password } = state;

  const handleNextStep = async () => {
    navigate("/");
  };
  const handleBackStep = () => navigate(-1);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.email,
      payload: e.target.value,
    });
  };
  const handlePassChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.password,
      payload: e.target.value,
    });
  };

  return (
    <ThemeForm title="Register" desc="Sign up to enter and start your diet">
      <C.Container>
        <p>Passo 4/4</p>
        <h2>Para continuar insira o seu e-mail e senha</h2>
        <p>Preencha o campos abaixo </p>
        <hr />

        <label>
          Email: <br />
          <Input
            autoFocus={true}
            type="text"
            value={email}
            handleOnChange={handleEmailChange}
            placeHolder="Email"
          />
        </label>
        <label>
          Password: <br />
          <Input
            autoFocus={true}
            type="password"
            value={password}
            handleOnChange={handlePassChange}
            placeHolder="Password"
          />
        </label>
        <div className="btnArea">
          <Button onClick={handleBackStep} bg="--color-h2" label="←Voltar" />
          <Button onClick={handleNextStep} bg="--color-h2" label="Proximo" />
        </div>
      </C.Container>
    </ThemeForm>
  );
};
