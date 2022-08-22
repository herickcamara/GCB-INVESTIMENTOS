import { useForm } from "react-hook-form";
import { State } from "../types/ReducerState";

export const useFormHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<State>();

  return { register, handleSubmit, watch, errors };
};
