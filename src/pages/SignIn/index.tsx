import * as C from "./styled";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import { MainTheme } from "../../styles/themes/ThemeMain";
import illustration from "../../styles/assets/Illustration.svg";
import { Header } from "../../components/Header";
import { DbFake } from "../../services/dataBase";
import { SubmitHandler } from "react-hook-form";
import { State } from "../../types/ReducerState";
import { useFormHook } from "../../hooks/useFormHook";
import { useState } from "react";
import { ErroArea } from "../../components/Error";
import { useFormContext } from "../../hooks/ContextHook";

type ErrorMessage = {
  error: boolean;
  message: string | undefined;
};
export const SignIn = () => {
  const [ErrorMessage, setMessageErr] = useState<ErrorMessage>({
    error: false,
    message: "",
  });
  const { state } = useFormContext();
  const closeWindowError = () => setMessageErr({ error: false, message: "" });
  const { errors, handleSubmit, register } = useFormHook();
  const signin = async ({ email, password }: State) => {
    const DB = await DbFake.getDBFake(email, password);
    if (DB.status >= 500) {
      setMessageErr({ error: true, message: DB.message });
    } else {
      if (DB.status >= 400) {
        setMessageErr({ error: true, message: DB.message });
      }
      const user = [...DB.user];

      return (window.location.href = `/home/${state.name}`);
    }
  };

  const onSubmit: SubmitHandler<State> = (data) => signin(data);
  return (
    <MainTheme img={illustration} pos="top right">
      {ErrorMessage.error && (
        <ErroArea onClick={closeWindowError} error={ErrorMessage.message} />
      )}
      <Header title="Healthy Food" />
      <C.Container>
        <h2>Healthy Food</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <h2>Login</h2>

          <Input
            type="email"
            register={register}
            required
            path="email"
            placeHolder="E-mail"
          />
          {errors.email && <span>This field is required</span>}
          <Input
            type="password"
            register={register}
            required
            path="password"
            placeHolder="Senha"
          />
          {errors.password && <span>This field is required</span>}

          <div className="areaBtn">
            <Button type="submit" label="Entrar→" bg="--color-h2" />
          </div>
        </form>
        <p>
          I want to sign up <Link to="/step1">Click here.</Link>
        </p>
      </C.Container>
    </MainTheme>
  );
};
