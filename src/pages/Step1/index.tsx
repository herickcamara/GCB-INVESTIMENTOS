import * as C from "./styled";
import { useEffect } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

import { FormAction } from "../../Reducer/useReduce";
import { filterData } from "../../helpers/filterDate";
import { useFormContex } from "../../hooks/ContextHook";
import { SubmitHandler, useForm } from "react-hook-form";
import { State } from "../../types/ReducerState";

export const Step1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useFormContex();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<State>();

  useEffect(() => {
    setcurrent();
  }, []);

  const setcurrent = () => {
    dispatch({
      type: FormAction.setCurrentStep,
      payload: 1,
    });
  };

  const setState = (data: State) => {
    const { dateNacimento, setName, setLastName, cpf } = data;
    dispatch({ type: FormAction.setName, payload: setName });
    dispatch({ type: FormAction.setLastName, payload: setLastName });
    dispatch({ type: FormAction.cpf, payload: cpf });
    dispatch({ type: FormAction.dateNacimento, payload: dateNacimento });
    navigate("/step2");
  };

  const onSubmit: SubmitHandler<State> = (data) => setState(data);

  return (
    <ThemeForm
      title="Cadastre-se"
      desc="Inscreva-se para entrar e começar sua dieta"
    >
      <C.Container>
        <p>{state.setName}</p>
        <p>Passo 1/4</p>
        <h2>Vamos começar com o seu nome e sobrenome</h2>
        <p>Preencha os campos abaixo! </p>

        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="gridArea">
            <Input
              label="CPF:"
              placeHolder="CPF"
              register={register}
              path="cpf"
              required
              value={state.cpf}
            />
            {errors.cpf && <span>Este Campo é Obrigatório</span>}

            <Input
              label="Nome:"
              placeHolder="Nome"
              register={register}
              path="setName"
              required
              value={state.setName}
            />
            {errors.setName && <span>Este Campo é Obrigatório</span>}

            <Input
              label="Sobrenome:"
              placeHolder="Sobrenome"
              register={register}
              path="setLastName"
              required
              value={state.setLastName}
            />
            {errors.setLastName && <span>Este Campo é Obrigatório</span>}

            <Input
              label="Data de Nascimento:"
              placeHolder="Data de Nascimento"
              register={register}
              path="dateNacimento"
              type="date"
              required
              value={state.dateNacimento}
            />
            {errors.dateNacimento && <span>Este Campo é Obrigatório</span>}
          </div>

          <Button type="submit" label="Próximo →" />
        </form>
      </C.Container>
    </ThemeForm>
  );
};
