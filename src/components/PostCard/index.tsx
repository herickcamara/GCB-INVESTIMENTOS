import { DataFakeUser } from "../../types/TypeDataFake";
import * as C from "./styled";

type Prop = {
  item: DataFakeUser;
};
export const Post = ({ item }: Prop) => {
  return (
    <C.Container>
      <div className="imgArea">
        <img src={item.postImg} alt="" />
      </div>
      <div className="titleArea">{item.postLabel}</div>
      <div className="userArea">
        <div className="avatarArea">
          <div className="avatar">
            <img src={item.userAvatar} alt="" />
          </div>
        </div>
        <div className="userName">{item.userName}</div>
      </div>
    </C.Container>
  );
};
