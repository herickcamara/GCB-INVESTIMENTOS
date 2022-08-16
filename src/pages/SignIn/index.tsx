import * as C from "./styled";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import { MainTheme } from "../../themes/ThemeMain";

import illustration from "../../assets/Illustration.svg";
import { Header } from "../../components/Header";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePassChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPass(e.target.value);

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
              value={Pass}
              placeHolder="password"
              handleOnChange={handlePassChange}
            />
          </label>
          <div className="areaBtn">
            <Button label="Entrar→" bg="--color-h2" />
          </div>
        </div>
        <p>
          quero me Cadastrar <Link to="/step1">click Aqui.</Link>
        </p>
      </C.Container>
    </MainTheme>
  );
};
