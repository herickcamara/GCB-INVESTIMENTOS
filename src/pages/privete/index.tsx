import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Auth } from "../../helpers/auth";

type Prop = {
  children?: ReactNode;
};

export const Privete = ({ children }: Prop) => {
  const loggd = Auth();

  if (loggd) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
};
