import { useForm } from "react-hook-form";
import { State } from "../types/ReducerState";
import { yupResolver } from "@hookform/resolvers/yup";

export const useFormHook = (schema: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<State>({
    resolver: yupResolver(schema),
  });

  return { register, handleSubmit, watch, errors };
};
