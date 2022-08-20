import * as C from "./styled";
import Carousel, { RenderArrowProps } from "@itseasy21/react-elastic-carousel";
import arrowLeft from "../../styles/assets/arrowLeft.svg";
import arrowRight from "../../styles/assets/arrowRight.svg";
import { Post } from "../PostCard";
import { DataFakeUser } from "../../types/TypeDataFake";

type Props = {
  Posts: DataFakeUser[];
};

export const CarouselComponent = ({ Posts }: Props) => {
  const breakPoints = [
    { width: 187, itemsToShow: 1 },
    { width: 521, itemsToShow: 2 },
    { width: 721, itemsToShow: 3 },
    { width: 780, itemsToShow: 3 },
  ];

  const myArrow = ({ type, onClick, isEdge }: RenderArrowProps) => {
    const pointer = type === "PREV" ? arrowLeft : arrowRight;
    const shadow = type === "PREV" ? true : false;
    const right = type === "PREV" ? true : false;
    return (
      <C.AreaArrowLeft
        right={right}
        shadow={shadow}
        onClick={onClick}
        disabled={isEdge}
      >
        <button onClick={onClick}>
          <img src={pointer} alt="" />
        </button>
      </C.AreaArrowLeft>
    );
  };
  return (
    <Carousel
      renderArrow={myArrow}
      isRTL={false}
      itemsToScroll={2}
      breakPoints={breakPoints}
      transitionMs={1000}
    >
      {Posts.map((item, index) => {
        return <Post item={item} key={index} />;
      })}
    </Carousel>
  );
};
