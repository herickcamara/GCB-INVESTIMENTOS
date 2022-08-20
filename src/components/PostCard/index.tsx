import { DataFakeUser } from "../../types/TypeDataFake";
import Item from "./Item";

type Prop = {
  item: DataFakeUser;
};
export const Post = ({ item }: Prop) => {
  return (
    <Item>
      <div className="imgArea">
        <img src={item.postImg} alt="" />
      </div>
      <div className="container">
        <h2>{item.postLabel}</h2>
        <div className="userArea">
          <div className="avatarArea">
            <div className="avatar">
              <img src={item.userAvatar} alt="" />
            </div>
          </div>
          <div className="userName">
            <span>{item.userName}</span>
          </div>
        </div>
      </div>
    </Item>
  );
};
