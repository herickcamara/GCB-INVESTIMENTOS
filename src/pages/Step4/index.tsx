import * as C from "./styled";
import { useEffect } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../hooks/ContextHook";
import { FormAction } from "../../Reducer/useReduce";
import { DbFake } from "../../services/dataBase";
import { SubmitHandler } from "react-hook-form";
import { State } from "../../types/ReducerState";
import { useFormHook } from "../../hooks/useFormHook";

export const Step4 = () => {
  const { register, handleSubmit, errors } = useFormHook();
  const navigate = useNavigate();
  const { state, dispatch } = useFormContext();

  useEffect(() => {
    if (state.houseNumber === 0) {
      navigate("/step3");
    }
    setcurrent();
  }, []);

  const setcurrent = () => {
    dispatch({
      type: FormAction.currentStep,
      payload: 4,
    });
  };

  const setState = async ({ email, password }: State) => {
    dispatch({ type: FormAction.email, payload: email });
    dispatch({ type: FormAction.password, payload: password });
    console.log(state);
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
      title={`${state.name}`}
      desc="To access, complete your registration"
    >
      <C.Container>
        {state.email}
        <p>Step 4/4</p>
        <h2>To continue enter your email and password</h2>
        <p>Fill in the fields below! </p>
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
              label="password:"
              register={register}
              path="password"
              placeHolder="password"
              required
              type="password"
            />
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
