import * as C from "./styled";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/input";
import { MainTheme } from "../../themes/ThemeMain";

import imgEnd from "../../assets/bloco_final_image.svg";

export const Section_5 = () => {
  return (
    <MainTheme img={imgEnd} pos="top right">
      <C.Container>
        <aside className="aside">
          <h2>
            Join our membership <br /> to get special offer
          </h2>
          <div>
            <Input />
            <Button label="Join" />
          </div>
        </aside>
      </C.Container>
    </MainTheme>
  );
};
