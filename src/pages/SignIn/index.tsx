import * as C from "./styled";

import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import { MainTheme } from "../../styles/themes/ThemeMain";

import illustration from "../../styles/assets/Illustration.svg";
import { Header } from "../../components/Header";
import { DbFake } from "../../helpers/useSetData";
import { SubmitHandler, useForm } from "react-hook-form";
import { State } from "../../types/ReducerState";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<State>();

  const signin = async ({ email, password }: State) => {
    const status = await DbFake.getDBFake(email, password);

    if (status.status >= 500) {
      const err: any = status.message;

      return alert(err);
    } else {
      if (status.message) {
        const message: any = status.message;
        return alert(message);
      }
      const user = [...status.user];
      return (window.location.href = `/home/${user[0].setName}`);
    }
  };
  const onSubmit: SubmitHandler<State> = (data) => signin(data);
  return (
    <MainTheme img={illustration} pos="top right">
      <Header title="Healthy Food" />
      <C.Container>
        <h2>Healthy Food</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <h2>Login</h2>

          <Input
            type="text"
            register={register}
            required
            path="email"
            placeHolder="E-mail"
          />

          <Input
            type="password"
            register={register}
            required
            path="password"
            placeHolder="Senha"
          />

          <div className="areaBtn">
            <Button type="submit" label="Entrar→" bg="--color-h2" />
          </div>
        </form>
        <p>
          Quero me Cadastrar <Link to="/step1">Click Aqui.</Link>
        </p>
      </C.Container>
    </MainTheme>
  );
};
