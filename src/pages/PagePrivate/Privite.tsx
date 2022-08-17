import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Auth } from "../../helpers/auth";

type Props = {
  children: ReactNode;
};
export const RoutePrivite = ({ children }: Props) => {
  let logged = Auth();
  let auth = logged;
  return (
    <>
      {auth && { children }}
      {!auth && <Navigate to="/" />}
    </>
  );
};
