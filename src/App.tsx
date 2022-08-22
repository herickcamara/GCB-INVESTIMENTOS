import { ListRouter } from "./Routes";
import { useEffect } from "react";
import { Auth } from "./helpers/auth";
import { State } from "./types/ReducerState";
import { FormAction } from "./Reducer/useReduce";
import { useFormContext } from "./hooks/ContextHook";
export const App = () => {
  const { dispatch } = useFormContext();
  let logged = Auth();
  useEffect(() => {
    if (logged) {
      setState(logged.hasUser[0]);
    }
  }, []);
  const setState = (user: State) => {
    dispatch({
      type: FormAction.name,
      payload: user.name,
    });

    dispatch({
      type: FormAction.CPF,
      payload: user.CPF,
    });
    dispatch({
      type: FormAction.birthDate,
      payload: user.birthDate,
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
      type: FormAction.houseNumber,
      payload: user.houseNumber,
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
      type: FormAction.state,
      payload: user.state,
    });
  };

  return <ListRouter />;
};
