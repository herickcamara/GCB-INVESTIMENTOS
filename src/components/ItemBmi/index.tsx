import { Level } from "../../helpers/bmi";
import * as C from "./styled";

type Props = {
  item: Level;
};

export const ItemBmi = ({ item }: Props) => {
  return (
    <C.Container bg={item.color}>
      <h3>{item.title}</h3>
      <div>
        imc is between {item.bmi[0]} and {item.bmi[1]}
      </div>
      {item.youBmi && (
        <div>
          <p>{item.youBmi.toFixed(2)}</p>
        </div>
      )}
    </C.Container>
  );
};
