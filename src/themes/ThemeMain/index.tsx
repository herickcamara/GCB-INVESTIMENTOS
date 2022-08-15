import { ReactNode } from "react";
import * as C from "./styled";
type Prop = {
  children: ReactNode;
  img?: string;
  img2?: string;
  pos?: string;
};

export const MainTheme = ({ children, img, img2, pos }: Prop) => {
  return (
    <C.Container img={img} img2={img2} pos={pos}>
      <div className="subContainer">{children}</div>
    </C.Container>
  );
};
