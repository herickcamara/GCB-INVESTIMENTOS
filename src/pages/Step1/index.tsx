import * as C from "./styled";
import { useEffect } from "react";

import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

import { FormAction } from "../../Reducer/useReduce";
import { filterData } from "../../helpers/filterDate";
import { useFormContext } from "../../hooks/ContextHook";
import { SubmitHandler } from "react-hook-form";
import { State } from "../../types/ReducerState";
import { useFormHook } from "../../hooks/useFormHook";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  birthDate: yup.date().required(),
  // city: yup.string(),
  CPF: yup.string().required().max(11),
  // district: yup.string(),
  // email: yup.string().required(),
  // houseNumber: yup.number().positive().integer().required(),
  // password: yup.string().required(),
  // state: yup.string(),
  // street: yup.string(),
  // zipCode: yup.number().positive().integer().max(8).required(),
});
export const Step1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useFormContext();
  const { register, handleSubmit, errors } = useFormHook(schema);

  useEffect(() => {
    setcurrent();
  }, []);

  const setcurrent = () => {
    dispatch({
      type: FormAction.currentStep,
      payload: 1,
    });
  };

  const setState = (data: State) => {
    console.log(data);
    const { birthDate, name, CPF } = data;
    dispatch({ type: FormAction.name, payload: name });
    dispatch({ type: FormAction.CPF, payload: CPF });
    dispatch({ type: FormAction.birthDate, payload: birthDate });
    navigate("/step2");
  };

  const onSubmit: SubmitHandler<State> = (data) => setState(data);

  return (
    <ThemeForm title="Register" desc="Sign up to log in and start your diet">
      <C.Container>
        <p>1/4 step</p>
        <h2>Let's start with your first and last name</h2>
        <p>Fill in the fields below! </p>

        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="gridArea">
            <Input
              label="CPF:"
              placeHolder="CPF"
              register={register}
              path="CPF"
              required
              value={state.CPF}
            />

            {errors.CPF && <span>{errors.CPF.message}</span>}

            <Input
              label="Name:"
              placeHolder="Name"
              register={register}
              path="name"
              required
              value={state.name}
            />
            {errors.name && <span>{errors.name.message}</span>}

            <Input
              label="Birth Date:"
              placeHolder="Birth Date"
              register={register}
              path="birthDate"
              type="date"
              required
              value={state.birthDate}
            />
            {errors.birthDate && <span>{errors.birthDate.message}</span>}
          </div>

          <Button type="submit" label="Next →" />
        </form>
      </C.Container>
    </ThemeForm>
  );
};
