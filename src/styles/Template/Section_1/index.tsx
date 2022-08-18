import * as C from "./styled";
import { Header } from "../../../components/Header";
import { Menu } from "../../../components/Menu";
import { MainTheme } from "../../themes/ThemeMain";
import { Input } from "../../../components/input";
import { Button } from "../../../components/Button";

import illustration from "../../assets/Illustration.svg";
import search from "../../assets/magnifyingGlass.png";

export const Section_1 = () => {
  return (
    <MainTheme img={illustration} pos="right top">
      <Header title="Healthy Food">
        <Menu />
      </Header>
      <C.Container>
        <aside className="aside">
          <h2>
            Ready for <br /> Trying a new
            <br /> recipe?
          </h2>
          <div>
            <Input />
            <Button img={search} />
          </div>
        </aside>
      </C.Container>
    </MainTheme>
  );
};
