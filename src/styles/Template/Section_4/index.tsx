import { CarouselComponent } from "../../../components/Carousel/Index";
import { Post } from "../../../components/PostCard";
import { Data } from "../../../dataFake";
import { MainTheme } from "../../themes/ThemeMain";
import * as C from "./styled";

export const Section_4 = () => {
  const items = Data.users;

  return (
    <MainTheme>
      <C.Container>
        <h2>Read Our Blog</h2>
        <p>Far far away, behind the word mountains, far from the countries</p>
        <p>Vokalia and Consonantia, there live the blind texts.</p>
      </C.Container>
      <C.ContainerScroll>
        <div className="scrollBar">
          <CarouselComponent Posts={items} />
        </div>
      </C.ContainerScroll>
    </MainTheme>
  );
};
