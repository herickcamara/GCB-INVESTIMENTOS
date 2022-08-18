import * as C from "./styled";
import React, { ChangeEvent, useEffect } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/ContextHook";
import { FormAction } from "../../Reducer/useReduce";

export const Step2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const { zipCode, setName } = state;

  useEffect(() => {
    if (setName === "") {
      navigate("/step1");
    }
    setcurrent();
  }, []);

  const setcurrent = () => {
    dispatch({
      type: FormAction.setCurrentStep,
      payload: 2,
    });
  };
  const handleNextStep = async () => {
    if (zipCode === "") {
      return alert("Preencha todos os compos");
    }
    if (zipCode.length > 8 || zipCode.length < 8) {
      return alert("CEP Nao encontrado verifique seu CEP");
    }
    navigate("/step3");
  };
  const handleBackStep = () => navigate(-1);

  const handleCEPChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.zipCode,
      payload: e.target.value,
    });
  };

  return (
    <ThemeForm title="Register" desc="Sign up to enter and start your diet">
      <C.Container>
        <p>Passo 2/4</p>
        <h2>Olá {setName}, insira o CEP</h2>
        <p>Preencha o campo abaixo!</p>

        <hr />
        <div className="gridArea">
          <label>
            CEP: <br />
            <Input
              autoFocus={true}
              type="text"
              value={zipCode}
              handleOnChange={handleCEPChange}
              placeHolder="CEP"
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
