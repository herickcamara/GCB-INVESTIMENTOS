import { Button } from "../Button";
import * as C from "./styled";
type Prop = {
  title: string;
  img: string;
};
export const CardRecipe = ({ img, title }: Prop) => {
  return (
    <C.Container>
      <div className="imgArea">
        <img src={img} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <Button label="See Recipe" />
      </div>
    </C.Container>
  );
};
