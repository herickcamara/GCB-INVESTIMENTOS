import * as C from "./styled";
import { useEffect } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

import { FormAction } from "../../Reducer/useReduce";
import { filterData } from "../../helpers/filterDate";
import { State } from "../../types/ReducerState";
import { useFormContex } from "../../hooks/ContextHook";
import { SubmitHandler, useForm } from "react-hook-form";

export const Step1 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<State>();
  const { state, dispatch } = useFormContex();

  useEffect(() => {
    setcurrent();
  }, []);

  const setcurrent = () => {
    dispatch({
      type: FormAction.setCurrentStep,
      payload: 1,
    });
  };

  const handleNameChange: SubmitHandler<State> = ({
    setName,
    dateNacimento,
    setLastName,
    cpf,
  }: State) => {
    dispatch({
      type: FormAction.cpf,
      payload: cpf,
    });
    dispatch({
      type: FormAction.setName,
      payload: setName,
    });
    dispatch({
      type: FormAction.setLastName,
      payload: setLastName,
    });

    dispatch({
      type: FormAction.dateNacimento,
      payload: dateNacimento,
    });

    if (filterData(dateNacimento) < 18) {
      return alert("conteudo minimo para 18 anos");
    }

    return navigate("/step2");
  };

  return (
    <ThemeForm title="Register" desc="Sign up to enter and start your diet">
      <C.Container>
        <p>{state.setName}</p>
        <p>Passo 1/4</p>
        <h2>Vamos começar com o seu nome e sobrenome</h2>
        <p>Preencha os campos abaixo! </p>

        <hr />
        <form onSubmit={handleSubmit(handleNameChange)}>
          <div className="gridArea">
            <Input
              label="CPF:"
              placeHolder="CPF:"
              register={register}
              path="cpf"
              required
            />

            <Input
              label="Nome:"
              placeHolder="Nome:"
              register={register}
              path="setName"
              required
            />
            <Input
              label="Sobrenome:"
              placeHolder="Sobrenome:"
              register={register}
              path="setLastName"
              required
            />
            <Input
              label="dateNacimento:"
              placeHolder="dateNacimento:"
              register={register}
              path="dateNacimento"
              required
            />
          </div>

          {errors.setLastName && <span>This field is required</span>}
          <Button type="submit" label="Proximo →" />
        </form>
      </C.Container>
    </ThemeForm>
  );
};
