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
import { RoutePrivite } from "../pages/PagePrivate/Privite";

export const ListRouter = () => {
  let logged = Auth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {logged && <Route path="/:slug" element={<DashBordHome />} />}
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
