import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { Step1 } from "../pages/Step1";
import { Step2 } from "../pages/Step2";
import { Step3 } from "../pages/Step3";
import { Step4 } from "../pages/Step4";

export const ListRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
      </Routes>
    </BrowserRouter>
  );
};
