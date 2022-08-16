import { ChangeEvent, useState } from "react";
import { Input } from "../../components/input";
import { MainTheme } from "../../themes/ThemeMain";
import * as C from "./styled";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePassChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPass(e.target.value);

  return (
    <MainTheme>
      <C.Container>
        <h2>Login</h2>
        <div className="form">
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
        </div>
      </C.Container>
    </MainTheme>
  );
};
