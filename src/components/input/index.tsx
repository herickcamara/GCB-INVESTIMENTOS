import React, { ChangeEvent } from "react";
import * as C from "./styled";

type Prop = {
  placeHolder?: string;
  type?: string;
  autoFocus?: boolean;
  value?: string | number;
  handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};
export const Input = ({
  placeHolder,
  autoFocus,
  type,
  value,
  handleOnChange,
  disabled,
}: Prop) => {
  return (
    <C.Input
      placeholder={placeHolder}
      type={type}
      autoFocus={autoFocus}
      value={value}
      disabled={disabled}
      onChange={handleOnChange}
    />
  );
};
