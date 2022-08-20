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
import { API } from "../../services/api";

export const Step2 = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<State>();
  const { state, dispatch } = useFormContex();

  useEffect(() => {
    if (state.cpf === "") {
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

  const handleNameChange: SubmitHandler<State> = ({ zipCode }: State) => {
    dispatch({
      type: FormAction.zipCode,
      payload: zipCode,
    });

    return navigate("/step3");
  };
  const handleBackStep = () => navigate(-1);

  return (
    <ThemeForm title="Register" desc="Sign up to enter and start your diet">
      <C.Container>
        <p>Passo 2/4</p>
        <h2>Olá {state.setName}, insira o CEP</h2>
        <p>Preencha o campo abaixo!</p>

        <hr />

        <form onSubmit={handleSubmit(handleNameChange)}>
          <div className="gridArea">
            <Input
              label="CEP:"
              placeHolder="CEP:"
              register={register}
              required
              path="zipCode"
            />
          </div>
          <C.BtmArea>
            <Button type="submit" bg="--color-h2" label="Proximo→" />
          </C.BtmArea>
        </form>
        <Button onClick={handleBackStep} bg="--color-h2" label="←Voltar" />
      </C.Container>
    </ThemeForm>
  );
};
