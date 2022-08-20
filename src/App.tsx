import { ListRouter } from "./Routes";
import { useEffect } from "react";
import { Auth } from "./helpers/auth";
import { setState } from "./hooks/setStates";
export const App = () => {
  let logged = Auth();
  useEffect(() => {
    if (logged) {
      setState(logged.hasUser[0]);
    }
  }, []);

  return <ListRouter />;
};
