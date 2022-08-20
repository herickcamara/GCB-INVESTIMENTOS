import { useForm } from "react-hook-form";
import { FormAction } from "../Reducer/useReduce";
import { State } from "../types/ReducerState";

export const useFormHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<State>();

  return {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  };
};
// };
// export const setState = (user: State) => {
//   dispatch({
//     type: FormAction.setName,
//     payload: user.setName,
//   });
//   dispatch({
//     type: FormAction.setLastName,
//     payload: user.setLastName,
//   });
//   dispatch({
//     type: FormAction.cpf,
//     payload: user.cpf,
//   });
//   dispatch({
//     type: FormAction.dateNacimento,
//     payload: user.dateNacimento,
//   });
//   dispatch({
//     type: FormAction.zipCode,
//     payload: user.zipCode,
//   });
//   dispatch({
//     type: FormAction.city,
//     payload: user.city,
//   });
//   dispatch({
//     type: FormAction.district,
//     payload: user.district,
//   });
//   dispatch({
//     type: FormAction.numberHouse,
//     payload: user.numberHouse,
//   });
//   dispatch({
//     type: FormAction.street,
//     payload: user.street,
//   });
//   dispatch({
//     type: FormAction.email,
//     payload: user.email,
//   });
//   dispatch({
//     type: FormAction.password,
//     payload: user.password,
//   });
//   dispatch({
//     type: FormAction.uf,
//     payload: user.uf,
//   });

//   return state;
// };
