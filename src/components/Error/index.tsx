import { Button } from "../Button";
import * as C from "./styled";

type PropError = {
  error?: string;
  onClick?: () => void;
};

export const ErroArea = ({ error, onClick }: PropError) => {
  return (
    <C.Container>
      <div className="infor">
        <h1>Attention error !</h1>
        <h2>{error}</h2>
        <div className="AreaButton">
          <Button onClick={onClick} label="OK" bg="--color-h2" />
        </div>
      </div>
    </C.Container>
  );
};
