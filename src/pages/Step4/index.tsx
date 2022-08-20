import * as C from "./styled";
import React, { ChangeEvent, useEffect } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useFormContex } from "../../hooks/ContextHook";
import { FormAction } from "../../Reducer/useReduce";
import { DbFake } from "../../helpers/useSetData";
import { useForm } from "react-hook-form";
import { State } from "../../types/ReducerState";

export const Step4 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<State>();
  const navigate = useNavigate();
  const { state, dispatch } = useFormContex();
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
            <Input register={register} path="email" placeHolder="Email" />
          </label>
          <label>
            Password: <br />
            <Input register={register} path="email" placeHolder="Password" />
          </label>
        </div>
        <C.BtmArea>
          {/* <Button onClick={} bg="--color-h2" label="←Voltar" /> */}
          {/* <Button onClick={} bg="--color-h2" label="Proximo→" /> */}
        </C.BtmArea>
      </C.Container>
    </ThemeForm>
  );
};
