import { Path, UseFormRegister } from "react-hook-form";
import { State } from "../../types/ReducerState";

import * as C from "./styled";

type InputProps = {
  path: Path<State>;
  register: UseFormRegister<State>;
  required?: boolean;
  placeHolder?: string;
  label?: string;
  disabled?: boolean;
  value?: string | number;
};
export const Input = ({
  placeHolder,
  label,
  path,
  disabled,
  register,
  required,
  value,
}: InputProps) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ marginBottom: 10 }}>{label}</label> <br />
      <C.Input
        value={value}
        {...register(path, { required })}
        placeholder={placeHolder}
        disabled={disabled}
      />
    </div>
  );
};
