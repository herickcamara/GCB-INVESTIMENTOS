import * as C from "./styled";
import { useEffect } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useFormContex } from "../../hooks/ContextHook";
import { FormAction } from "../../Reducer/useReduce";
import { API } from "../../services/api";
import { State } from "../../types/ReducerState";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Step3 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<State>();
  const { state, dispatch } = useFormContex();
  useEffect(() => {
    if (state.zipCode === "") {
      navigate("/step2");
    }
    setcurrent();
  }, []);
  useEffect(() => {
    useSetData();
  }, []);
  const setcurrent = () =>
    dispatch({ type: FormAction.setCurrentStep, payload: 3 });

  const useSetData = async () => {
    if (state.zipCode) {
      const json = await API.getCep(state.zipCode);
      const { bairro, localidade, logradouro, uf } = json;
      dispatch({ type: FormAction.city, payload: localidade });
      dispatch({ type: FormAction.district, payload: bairro });
      dispatch({ type: FormAction.street, payload: logradouro });
      dispatch({ type: FormAction.uf, payload: uf });
    }
  };

  const setState = ({ numberHouse }: State) => {
    dispatch({ type: FormAction.numberHouse, payload: numberHouse });
    navigate("/step4");
  };
  const handleBackStep = () => navigate(-1);
  const onSubmit: SubmitHandler<State> = (data) => {
    setState(data);
  };
  return (
    <ThemeForm
      title={`${state.setName} ${state.setLastName}`}
      desc="Para acessar conclua o seu cadastro"
    >
      <C.Container>
        <p>Passo 3/4</p>
        <h2>{state.setName} Confirme os dados abaixo</h2>
        <p>
          Atenção se houver alguma divergência nos dados verifique o seu CEP:
          {state.zipCode}
        </p>
        <hr />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="gridArea">
            <Input
              register={register}
              label="UF:"
              path="uf"
              disabled
              value={state.uf}
            />

            <Input
              register={register}
              label="CIDADE:"
              path="city"
              disabled
              value={state.city}
            />
            <Input
              register={register}
              label="BAIRRO:"
              path="district"
              disabled
              value={state.district}
            />

            <Input
              register={register}
              label="RUA:"
              path="street"
              disabled
              value={state.street}
            />

            <Input
              register={register}
              required
              label="Nº:"
              path="numberHouse"
              placeHolder="Numeroº:"
              value={""}
            />
          </div>
          <C.BtmArea>
            <Button type="submit" bg="--color-h2" label="Próximo→" />
          </C.BtmArea>
          <Button onClick={handleBackStep} bg="--color-h2" label="←Voltar" />
        </form>
      </C.Container>
    </ThemeForm>
  );
};
