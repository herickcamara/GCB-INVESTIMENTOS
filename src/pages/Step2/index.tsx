import * as C from "./styled";
import { useEffect } from "react";
import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { FormAction } from "../../Reducer/useReduce";
import { State } from "../../types/ReducerState";
import { useFormContext } from "../../hooks/ContextHook";
import { SubmitHandler } from "react-hook-form";
import { useFormHook } from "../../hooks/useFormHook";

export const Step2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useFormContext();
  const { errors, handleSubmit, register } = useFormHook();
  const onSubmit: SubmitHandler<State> = (data) => setState(data);
  const handleBackStep = () => navigate(-1);
  const setcurrent = () =>
    dispatch({ type: FormAction.currentStep, payload: 2 });

  const setState = (data: State) => {
    dispatch({ type: FormAction.zipCode, payload: data.zipCode });
    navigate("/step3");
  };

  useEffect(() => {
    if (state.CPF === "") {
      navigate("/step1");
    }
    setcurrent();
  }, []);
  return (
    <ThemeForm
      title={`${state.name}`}
      desc="To access, complete your registration"
    >
      <C.Container>
        <p>Step 2/4</p>
        <h2>Hello {state.name}, enter your zip code</h2>
        <p> Fill in the field below!</p>

        <hr />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="gridArea">
            <Input
              label="Zip code:"
              placeHolder="Zip code"
              register={register}
              required
              path="zipCode"
              value={state.zipCode}
            />
            {errors.zipCode && "be field is mandatory"}
          </div>
          <C.BtmArea>
            <Button onClick={handleBackStep} bg="--color-h2" label="← Back" />
            <Button type="submit" label="Next →" />
          </C.BtmArea>
        </form>
      </C.Container>
    </ThemeForm>
  );
};
