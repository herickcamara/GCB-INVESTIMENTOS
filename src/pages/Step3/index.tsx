import * as C from "./styled";
import { ChangeEvent, useEffect } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/ContextHook";
import { FormAction } from "../../Reducer/useReduce";
import { API } from "../../services/api";

export const Step3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const { city, numberHouse, street, district, uf } = state;
  useEffect(() => {
    useSetData();
  }, []);
  useEffect(() => {
    if (state.zipCode === "") {
      navigate("/step2");
    }
    setcurrent();
  }, []);
  const setcurrent = () => {
    dispatch({
      type: FormAction.setCurrentStep,
      payload: 3,
    });
  };
  const useSetData = async () => {
    if (state.zipCode) {
      const json = await API.getCep(state.zipCode);
      console.log(json);
      const { bairro, localidade, logradouro, uf } = json;
      dispatch({
        type: FormAction.city,
        payload: localidade,
      });
      dispatch({
        type: FormAction.district,
        payload: bairro,
      });
      dispatch({
        type: FormAction.street,
        payload: logradouro,
      });
      dispatch({
        type: FormAction.uf,
        payload: uf,
      });
    }
  };

  const handleNextStep = () => {
    if (!numberHouse) {
      return alert("Preencha o compo de number");
    }
    navigate("/step4");
  };
  const handleBackStep = () => navigate(-1);

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormAction.numberHouse,
      payload: e.target.value,
    });
  };

  return (
    <ThemeForm title="Register" desc="Sign up to enter and start your diet">
      <C.Container>
        <p>Passo 3/4</p>
        <h2>{state.setName} confirme os datos abaixo</h2>
        <p>
          Atenção se houver alguma divergência nos dados verifique seu CEP:
          {state.zipCode}
        </p>
        <hr />
        <div className="gridArea">
          <label>
            bairro: <br />
            <Input disabled value={district} />
          </label>
          <label>
            uf: <br />
            <Input disabled value={uf} />
          </label>
          <label>
            Cidade: <br />
            <Input disabled value={city} />
          </label>
          <label>
            Rua: <br />
            <Input disabled value={street} />
          </label>
          <label>
            Numero: <br />
            <Input
              autoFocus={true}
              type="number"
              value={numberHouse}
              handleOnChange={handleNumberChange}
              placeHolder="Numeroº:"
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
