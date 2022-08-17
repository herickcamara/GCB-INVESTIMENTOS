import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashBordHome } from "../pages/dashbord";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/notfound";
import { Auth } from "../helpers/auth";
import { SignIn } from "../pages/SignIn";
import { Step1 } from "../pages/Step1";
import { Step2 } from "../pages/Step2";
import { Step3 } from "../pages/Step3";
import { Step4 } from "../pages/Step4";
import { useEffect } from "react";

import { State } from "../types/ReducerState";
import { useForm } from "../hooks/ContextHook";
import { FormAction } from "../Reducer/useReduce";

export const ListRouter = () => {
  const { state, dispatch } = useForm();
  let logged = Auth();
  useEffect(() => {
    if (logged) {
      setState(logged.hasUser[0]);
    }
  }, []);

  const setState = (user: State) => {
    dispatch({
      type: FormAction.setName,
      payload: user.setName,
    });
    dispatch({
      type: FormAction.setLastName,
      payload: user.setLastName,
    });
    dispatch({
      type: FormAction.cpf,
      payload: user.cpf,
    });
    dispatch({
      type: FormAction.dateNacimento,
      payload: user.dateNacimento,
    });
    dispatch({
      type: FormAction.zipCode,
      payload: user.zipCode,
    });
    dispatch({
      type: FormAction.city,
      payload: user.city,
    });
    dispatch({
      type: FormAction.district,
      payload: user.district,
    });
    dispatch({
      type: FormAction.numberHouse,
      payload: user.numberHouse,
    });
    dispatch({
      type: FormAction.street,
      payload: user.street,
    });
    dispatch({
      type: FormAction.email,
      payload: user.email,
    });
    dispatch({
      type: FormAction.password,
      payload: user.password,
    });
    dispatch({
      type: FormAction.uf,
      payload: user.uf,
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {logged && <Route path="/home/:slug" element={<DashBordHome />} />}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
