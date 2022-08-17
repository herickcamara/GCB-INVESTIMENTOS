import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import * as C from "./styled";

export const NotFound = () => {
  return (
    <C.Container>
      <div className="container">
        <Header title="Healthy Food">
          <Menu />
        </Header>
        <div className="subContainer">
          <div className="error">
            <h1>4</h1>
            <h1>0</h1>
            <h1>4</h1>
          </div>
          <div className="notFound">
            <h2>Not Found</h2>
            <h3>Verifique a URL.</h3>
          </div>
        </div>
      </div>
    </C.Container>
  );
};
