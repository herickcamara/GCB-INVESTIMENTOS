import { ListRouter } from "./Routes";
import { State } from "./types/ReducerState";
import { useForm } from "./hooks/ContextHook";
import { FormAction } from "./Reducer/useReduce";
import { useEffect } from "react";
import { Auth } from "./helpers/auth";
export const App = () => {
  const { state, dispatch } = useForm();
  let logged = Auth();
  useEffect(() => {
    if (logged) {
      setState(logged.hasUser[0]);
    }
  }, []);

  const setState = (user: State) => {
    dispatch({
      type: FormAction.setName,
      payload: user.setName,
    });
    dispatch({
      type: FormAction.setLastName,
      payload: user.setLastName,
    });
    dispatch({
      type: FormAction.cpf,
      payload: user.cpf,
    });
    dispatch({
      type: FormAction.dateNacimento,
      payload: user.dateNacimento,
    });
    dispatch({
      type: FormAction.zipCode,
      payload: user.zipCode,
    });
    dispatch({
      type: FormAction.city,
      payload: user.city,
    });
    dispatch({
      type: FormAction.district,
      payload: user.district,
    });
    dispatch({
      type: FormAction.numberHouse,
      payload: user.numberHouse,
    });
    dispatch({
      type: FormAction.street,
      payload: user.street,
    });
    dispatch({
      type: FormAction.email,
      payload: user.email,
    });
    dispatch({
      type: FormAction.password,
      payload: user.password,
    });
    dispatch({
      type: FormAction.uf,
      payload: user.uf,
    });
  };

  return <ListRouter />;
};
