import { DataFakeUser } from "../../types/TypeDataFake";
import Item from "./Item";
import * as C from "./styled";

type Prop = {
  item: DataFakeUser;
};
export const Post = ({ item }: Prop) => {
  return (
    <Item>
      <div className="container">
        <div className="imgArea">
          <img src={item.postImg} alt="" />
        </div>
        <div className="titleArea">
          <h2>{item.postLabel}</h2>
        </div>
        <div className="userArea">
          <div className="avatarArea">
            <div className="avatar">
              <img src={item.userAvatar} alt="" />
            </div>
          </div>
          <div className="userName">
            <p>{item.userName}</p>
          </div>
        </div>
      </div>
    </Item>
  );
};
