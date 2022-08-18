import * as C from "./styled";
import { MainTheme } from "../../themes/ThemeMain";
import { Data } from "../../../dataFake";
import { CardRecipe } from "../../../components/CardRecipe";

export const Section_2 = () => {
  return (
    <MainTheme>
      <C.Container>
        <h2>Our Best Recipes</h2>
        <p>Far far away, behind the word mountains, far from the countries</p>
        <p>Vokalia and Consonantia, there live the blind texts.</p>
      </C.Container>
      <C.GridArea>
        <C.Grid>
          {Data.recipe.map((item, index) => (
            <CardRecipe key={index} img={item.img} title={item.tetle} />
          ))}
        </C.Grid>
      </C.GridArea>
    </MainTheme>
  );
};
