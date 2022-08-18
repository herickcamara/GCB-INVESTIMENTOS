import * as C from "./styled";
import { Button } from "../../../components/Button";
import { MainTheme } from "../../themes/ThemeMain";

import service from "../../assets/bloco_services.svg";
import service2 from "../../assets/newservices.svg";

export const Section_3 = () => {
  return (
    <MainTheme img={service} img2={service2}>
      <C.Container>
        <h2>The best services ready To serve you</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <Button label="Know More" />
      </C.Container>
    </MainTheme>
  );
};
