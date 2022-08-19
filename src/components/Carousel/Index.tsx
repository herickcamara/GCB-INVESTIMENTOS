import * as C from "./styled";
import Carousel, { RenderArrowProps, ItemObject } from "react-elastic-carousel";
import arrowLeft from "../../styles/assets/arrowLeft.svg";
import arrowRight from "../../styles/assets/arrowRight.svg";
import { Post } from "../PostCard";
import { DataFakeUser } from "../../types/TypeDataFake";

type Props = {
  Posts: DataFakeUser[];
};

export const CarouselComponent = ({ Posts }: Props) => {
  const breakPoints = [
    { width: 421, itemsToShow: 1 },
    { width: 769, itemsToShow: 3 },
    { width: 1015, itemsToShow: 4 },
    { width: 1229, itemsToShow: 5 },
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
      itemPadding={[10, 10]}
      breakPoints={breakPoints}
    >
      {Posts.map((item, index) => {
        return <Post key={index} item={item} />;
      })}
    </Carousel>
  );
};
