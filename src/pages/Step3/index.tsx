import * as C from "./styled";
import { useEffect } from "react";
import { Input } from "../../components/input";
import { ThemeForm } from "../../styles/themes/themeForm";
import { Button } from "../../components/Button";
import { useFormContext } from "../../hooks/ContextHook";
import { FormAction } from "../../Reducer/useReduce";
import { API } from "../../services/api";
import { State } from "../../types/ReducerState";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormHook } from "../../hooks/useFormHook";

export const Step3 = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, errors } = useFormHook();
  const { state, dispatch } = useFormContext();
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
    dispatch({ type: FormAction.currentStep, payload: 3 });

  const useSetData = async () => {
    if (state.zipCode) {
      const json = await API.getCep(state.zipCode);
      const { bairro, localidade, logradouro, uf } = json;
      dispatch({ type: FormAction.city, payload: localidade });
      dispatch({ type: FormAction.district, payload: bairro });
      dispatch({ type: FormAction.street, payload: logradouro });
      dispatch({ type: FormAction.state, payload: uf });
    }
  };

  const setState = ({ houseNumber }: State) => {
    dispatch({ type: FormAction.houseNumber, payload: houseNumber });
    navigate("/step4");
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
        <p>Step 3/4</p>
        <h2>{state.name} Confirm the data below</h2>
        <p>
          Attention if there is any discrepancy in the data check your zip code:
          {state.zipCode}
        </p>
        <hr />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="gridArea">
            <Input
              register={register}
              label="State:"
              path="state"
              disabled
              value={state.state}
            />

            <Input
              register={register}
              label="City:"
              path="city"
              disabled
              value={state.city}
            />
            <Input
              register={register}
              label="District:"
              path="district"
              disabled
              value={state.district}
            />

            <Input
              register={register}
              label="Road:"
              path="street"
              disabled
              value={state.street}
            />

            <Input
              register={register}
              required
              label="Nº:"
              path="houseNumber"
              placeHolder="Numberº:"
              value={""}
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
