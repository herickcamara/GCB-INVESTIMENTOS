import { Link } from "react-router-dom";
import * as C from "./styled";

type Props = {
  title: string;
  icon: string;
  description: string;
  path: string;
  active: boolean;
};
export const SiderbarItem = ({
  title,
  path,
  description,
  active,
  icon,
}: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Infor>
          <h2>{title}</h2>
          <p>{description}</p>
        </C.Infor>
        <C.IconArea active={active}>{icon}</C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};
