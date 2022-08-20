import * as C from "./styled";
import { useEffect } from "react";
import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { FormAction } from "../../Reducer/useReduce";
import { State } from "../../types/ReducerState";
import { useFormContex } from "../../hooks/ContextHook";
import { SubmitHandler, useForm } from "react-hook-form";

export const Step2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useFormContex();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<State>();
  const onSubmit: SubmitHandler<State> = (data) => setState(data);
  const handleBackStep = () => navigate(-1);
  const setcurrent = () =>
    dispatch({ type: FormAction.setCurrentStep, payload: 2 });

  const setState = (data: State) => {
    dispatch({ type: FormAction.zipCode, payload: data.zipCode });
    navigate("/step3");
  };

  useEffect(() => {
    if (state.cpf === "") {
      navigate("/step1");
    }
    setcurrent();
  }, []);
  return (
    <ThemeForm
      title={`${state.setName} ${state.setLastName}`}
      desc="Para acessar conclua o seu cadastro"
    >
      <C.Container>
        <p>Passo 2/4</p>
        <h2>Olá {state.setName}, insira o seu CEP</h2>
        <p>Preencha o campo abaixo!</p>

        <hr />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="gridArea">
            <Input
              label="CEP:"
              placeHolder="CEP"
              register={register}
              required
              path="zipCode"
              value={state.zipCode}
            />
          </div>
          <C.BtmArea>
            <Button type="submit" bg="--color-h2" label="Próximo→" />
          </C.BtmArea>
        </form>
        <Button onClick={handleBackStep} bg="--color-h2" label="←Voltar" />
      </C.Container>
    </ThemeForm>
  );
};
