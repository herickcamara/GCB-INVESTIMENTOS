import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const ListRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
