import { FormAction } from "../Reducer/useReduce";
import { State } from "../types/ReducerState";
import { useFormContex } from "./ContextHook";

export const setState = async ({
  city,
  cpf,
  dateNacimento,
  district,
  email,
  numberHouse,
  password,
  setLastName,
  setName,
  street,
  uf,
  zipCode,
}: State) => {
  const { dispatch } = useFormContex();

  await dispatch({
    type: FormAction.setName,
    payload: setName,
  });
  await dispatch({
    type: FormAction.setLastName,
    payload: setLastName,
  });
  await dispatch({
    type: FormAction.cpf,
    payload: cpf,
  });
  await dispatch({
    type: FormAction.dateNacimento,
    payload: dateNacimento,
  });

  await dispatch({
    type: FormAction.email,
    payload: email,
  });
  await dispatch({
    type: FormAction.password,
    payload: password,
  });
};
