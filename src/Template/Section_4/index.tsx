import { Post } from "../../components/PostCard";
import { Data } from "../../dataFake";
import { MainTheme } from "../../themes/ThemeMain";
import * as C from "./styled";

export const Section_4 = () => {
  return (
    <MainTheme>
      <C.Container>
        <h2>Read Our Blog</h2>
        <p>Far far away, behind the word mountains, far from the countries</p>
        <p>Vokalia and Consonantia, there live the blind texts.</p>
      </C.Container>
      <C.ContainerScroll>
        <div className="scrollBar">
          <div className="areaArrowLeft">
            <button>←</button>
          </div>
          <div className="scroll">
            {Data.users.map((item, index) => (
              <Post key={index} item={item} />
            ))}
          </div>
          <div className="areaArrowRight">
            <button>→</button>
          </div>
        </div>
      </C.ContainerScroll>
    </MainTheme>
  );
};
