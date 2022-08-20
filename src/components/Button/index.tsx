import * as C from "./styled";

type Prop = {
  img?: string;
  label?: string;
  bg?: string;
  pd?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};
export const Button = ({ onClick, type, pd, img, bg, label }: Prop) => {
  return (
    <C.Button type={type} pd={pd} onClick={onClick} bg={bg}>
      {img && <img src={img} alt="" />}
      {label}
    </C.Button>
  );
};
