import * as C from "./styled";
import { useEffect } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useFormContex } from "../../hooks/ContextHook";
import { FormAction } from "../../Reducer/useReduce";
import { DbFake } from "../../helpers/useSetData";
import { SubmitHandler, useForm } from "react-hook-form";
import { State } from "../../types/ReducerState";

export const Step4 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<State>();
  const navigate = useNavigate();
  const { state, dispatch } = useFormContex();

  useEffect(() => {
    if (state.numberHouse === 0) {
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

  const setState = async ({ email, password }: State) => {
    dispatch({ type: FormAction.email, payload: email });
    dispatch({ type: FormAction.password, payload: password });
    const user = { ...state, email, password };
    await DbFake.postDBFake(user);
    navigate("/signin");
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
        {state.email}
        <p>Passo 4/4</p>
        <h2>Para continuar insira o seu e-mail e senha</h2>
        <p>Preencha os campos abaixo! </p>
        <hr />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="gridArea">
            <Input
              label="E-mail:"
              register={register}
              path="email"
              required
              placeHolder="Email"
            />

            <Input
              label="Senha:"
              register={register}
              path="password"
              placeHolder="Senha"
              required
              type="password"
            />
          </div>
          <C.BtmArea>
            <Button onClick={handleBackStep} bg="--color-h2" label="←Voltar" />
            <Button type="submit" bg="--color-h2" label="Próximo→" />
          </C.BtmArea>
        </form>
      </C.Container>
    </ThemeForm>
  );
};
