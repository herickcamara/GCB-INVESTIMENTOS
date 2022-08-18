import * as C from "./styled";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import { MainTheme } from "../../styles/themes/ThemeMain";

import illustration from "../../styles/assets/Illustration.svg";
import { Header } from "../../components/Header";
import { DbFake } from "../../helpers/useSetData";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePassChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPass(e.target.value);

  const signin = async () => {
    const data = await DbFake.getDBFake(email, pass);
    if (data.status >= 500) {
      const err: any = data.message;
      console.log(data.error);
      return setMessage(err);
    } else {
      if (data.message) {
        const message: any = data.message;
        return setMessage(message);
      }
      const user = [...data.user];
      return (window.location.href = `/home/:${user[0].setName}`);
    }
  };
  return (
    <MainTheme img={illustration} pos="top right">
      <Header title="Healthy Food" />
      <C.Container>
        <h2>Healthy Food</h2>
        <div className="form">
          <h2>Login</h2>
          <label>
            Email: <br />
            <Input
              type="text"
              value={email}
              placeHolder="Email"
              handleOnChange={handleEmailChange}
            />
          </label>
          <label>
            Password: <br />
            <Input
              type="password"
              value={pass}
              placeHolder="password"
              handleOnChange={handlePassChange}
            />
            {message && <small style={{ color: "#ff0000" }}>{message}</small>}
          </label>
          <div className="areaBtn">
            <Button onClick={() => signin()} label="Entrar→" bg="--color-h2" />
          </div>
        </div>
        <p>
          quero me Cadastrar <Link to="/step1">click Aqui.</Link>
        </p>
      </C.Container>
    </MainTheme>
  );
};
