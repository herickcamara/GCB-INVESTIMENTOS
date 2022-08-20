import * as C from "./styled";
import { ChangeEvent, useEffect } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useFormContex } from "../../hooks/ContextHook";
import { FormAction } from "../../Reducer/useReduce";
import { API } from "../../services/api";
import { State } from "../../types/ReducerState";
import { SubmitHandler, useForm } from "react-hook-form";

export const Step3 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<State>();
  const { state, dispatch } = useFormContex();
  const navigate = useNavigate();
  const { city, numberHouse, street, district, uf } = state;
  useEffect(() => {
    if (state.zipCode === "") {
      navigate("/step2");
    }
    setcurrent();
  }, []);
  useEffect(() => {
    useSetData();
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

  const handleBackStep = () => navigate(-1);

  const handleNameChange: SubmitHandler<State> = async ({
    numberHouse,
  }: State) => {
    dispatch({
      type: FormAction.numberHouse,
      payload: numberHouse,
    });
    navigate("/step4");
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

        <form onSubmit={handleSubmit(handleNameChange)}>
          <div className="gridArea">
            <Input
              register={register}
              required
              path="district"
              disabled
              value={district}
            />

            <Input register={register} required path="uf" disabled value={uf} />

            <Input
              register={register}
              required
              path="city"
              disabled
              value={city}
            />

            <Input
              register={register}
              required
              path="street"
              disabled
              value={street}
            />

            <Input
              register={register}
              required
              path="numberHouse"
              placeHolder="Numeroº:"
            />
          </div>
          <C.BtmArea>
            <Button onClick={handleBackStep} bg="--color-h2" label="←Voltar" />
            <Button type="submit" bg="--color-h2" label="Proximo→" />
          </C.BtmArea>
        </form>
      </C.Container>
    </ThemeForm>
  );
};
