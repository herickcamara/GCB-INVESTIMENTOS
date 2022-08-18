import * as C from "./styled";
import React, { ChangeEvent, useEffect } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/ContextHook";
import { FormAction } from "../../Reducer/useReduce";
import { DbFake } from "../../helpers/useSetData";

export const Step4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const { email, numberHouse, password } = state;
  useEffect(() => {
    if (numberHouse === undefined) {
      navigate("/step3");
    }
    setcurrent();
  }, []);

  const setcurrent = () => {
    dispatch({
      type: FormAction.setCurrentStep,
      payload: 4,
    });
  };
  const handleNextStep = async () => {
    const next = email && password;
    if (next) {
      if (email.includes("@")) {
        const response = await DbFake.postDBFake(state);
        if (response.status >= 500) {
          console.log(response.error);
          return alert(response.message);
        }

        return navigate("/signin");
      }

      return alert("email invalido");
    }
    return alert("Preencha todos os campos");
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
        <div className="gridArea">
          <label>
            Email: <br />
            <Input
              autoFocus={true}
              type="email"
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
        </div>
        <C.BtmArea>
          <Button onClick={handleBackStep} bg="--color-h2" label="←Voltar" />
          <Button onClick={handleNextStep} bg="--color-h2" label="Proximo→" />
        </C.BtmArea>
      </C.Container>
    </ThemeForm>
  );
};
