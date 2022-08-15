import { ContexProvider } from "./Context/FormContext ";
import { ListRouter } from "./Routes";

export const App = () => {
  return (
    <ContexProvider>
      <ListRouter />
    </ContexProvider>
  );
};
