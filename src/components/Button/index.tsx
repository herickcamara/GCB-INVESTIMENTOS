import * as C from "./styled";

type Prop = {
  img?: string;
  label?: string;
  bg?: string;
  pd?: string;
  onClick?: () => void;
};
export const Button = ({ onClick, pd, img, bg, label }: Prop) => {
  return (
    <C.Button pd={pd} onClick={onClick} bg={bg}>
      {img && <img src={img} alt="" />}
      {label}
    </C.Button>
  );
};
