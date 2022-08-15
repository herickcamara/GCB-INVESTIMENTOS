import React, { ChangeEvent } from "react";
import * as C from "./styled";

type Prop = {
  placeHolder?: string;
  type?: string;
  autoFocus?: boolean;
  value?: string;
  handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const Input = ({
  placeHolder,
  autoFocus,
  type,
  value,
  handleOnChange,
}: Prop) => {
  return (
    <C.Input
      placeholder={placeHolder}
      type={type}
      autoFocus={autoFocus}
      value={value}
      onChange={handleOnChange}
    />
  );
};
