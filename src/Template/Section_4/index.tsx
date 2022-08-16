import { useEffect, useRef, useState } from "react";
import { Post } from "../../components/PostCard";
import { Data } from "../../dataFake";
import { MainTheme } from "../../themes/ThemeMain";
import * as C from "./styled";

export const Section_4 = () => {
  const [displayLeft, setDisplayLeft] = useState(false);
  const [displayRight, setdisplayRight] = useState(true);
  const corsel: any = useRef(null);
  const [te, setTe] = useState(0);
  useEffect(() => {
    handleDisplay();
  }, [te]);

  const handleLeftClick = () => {
    const paddingMargin = 260;
    setTe((corsel.current.scrollLeft -= 259 + paddingMargin));
  };

  const handleRighttClick = () => {
    const paddingMargin = 260;
    console.log(corsel.current.scrollLeft);
    setTe((corsel.current.scrollLeft += 259));
  };

  const handleDisplay = () => {
    const paddingMargin = 260;

    if (te >= corsel.current.offsetWidth + paddingMargin) {
      setdisplayRight(false);
      setDisplayLeft(true);
    } else {
      setdisplayRight(false);
    }
  };
  return (
    <MainTheme>
      <C.Container>
        <h2>Read Our Blog</h2>
        <p>Far far away, behind the word mountains, far from the countries</p>
        <p>Vokalia and Consonantia, there live the blind texts.</p>
      </C.Container>
      <C.ContainerScroll>
        <div className="scrollBar">
          <div
            style={{ display: displayLeft ? "flex" : "none" }}
            className="areaArrowLeft"
          >
            <button onClick={handleLeftClick}>←</button>
          </div>
          <div ref={corsel} className="scroll">
            {Data.users.map((item, index) => (
              <Post key={index} item={item} />
            ))}
          </div>
          <div
            style={{ display: displayRight ? "flex" : "none" }}
            className="areaArrowRight"
          >
            <button onClick={handleRighttClick}>→</button>
          </div>
        </div>
      </C.ContainerScroll>
    </MainTheme>
  );
};
