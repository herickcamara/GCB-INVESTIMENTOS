import * as C from "./styled";

type Prop = {
  img?: string;
  label?: string;
  bg?: string;
  onClick?: () => void;
};
export const Button = ({ onClick, img, bg, label }: Prop) => {
  return (
    <C.Button onClick={onClick} bg={bg}>
      {img && <img src={img} alt="" />}
      {label}
    </C.Button>
  );
};
