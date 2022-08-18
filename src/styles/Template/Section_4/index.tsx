import { useEffect, useRef, useState } from "react";
import { Post } from "../../../components/PostCard";
import { Data } from "../../../dataFake";
import { MainTheme } from "../../themes/ThemeMain";
import * as C from "./styled";

export const Section_4 = () => {
  const [displayLeft, setDisplayLeft] = useState(false);
  const [displayRight, setDisplayRight] = useState(true);
  const corsel: any = useRef(null);
  const paddingMargin = 479;
  const widthItem = 243;

  const handleLeftClick = () => {
    corsel.current.scrollLeft -= widthItem + paddingMargin;
    handleDisplay();
  };

  const handleRighttClick = () => {
    corsel.current.scrollLeft += widthItem + paddingMargin;
    handleDisplay();
  };

  const handleDisplay = () => {
    const scroll = corsel.current.scrollLeft;
    const widthScroll = Data.users.length * widthItem - paddingMargin;

    if (scroll > 0 && scroll < widthScroll) {
      setDisplayLeft(true);
      setDisplayRight(true);
    }
    if (Math.ceil(scroll) >= widthScroll) {
      setDisplayRight(false);
      setDisplayLeft(true);
    }
    if (scroll <= 0) {
      setDisplayLeft(false);
      setDisplayRight(true);
    }
  };

  useEffect(() => {
    const div = corsel.current;
    div.addEventListener("scroll", handleDisplay);
  }, []);

  return (
    <MainTheme>
      <C.Container>
        <h2>Read Our Blog</h2>
        <p>Far far away, behind the word mountains, far from the countries</p>
        <p>Vokalia and Consonantia, there live the blind texts.</p>
      </C.Container>
      <C.ContainerScroll>
        <div className="scrollBar">
          <C.AreaArrowLeft style={{ display: displayLeft ? "flex" : "none" }}>
            <button onClick={handleLeftClick}>←</button>
          </C.AreaArrowLeft>
          <div ref={corsel} className="scroll">
            {Data.users.map((item, index) => (
              <Post key={index} item={item} />
            ))}
          </div>
          <C.AreaArrowRight style={{ display: displayRight ? "flex" : "none" }}>
            <button onClick={handleRighttClick}>→</button>
          </C.AreaArrowRight>
        </div>
      </C.ContainerScroll>
    </MainTheme>
  );
};
