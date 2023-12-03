import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";
import { LoginUser } from "../pages/auth/LoginUser";
import { Provider } from "react-redux";
import OtpRegister from "../pages/auth/Otpregister";
import { ForgetPass } from "../pages/auth/ForgetPass";
import { DetailKelas } from "../assets/components/DetailKelas";
import { DetailKelasPembayaran } from "../assets/components/DetailKelasPembayaran";

export const RouterList = () => {
  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginu" element={<LoginUser />} />
        <Route path="/otp" element={<OtpRegister />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/detailKelas" element={<DetailKelas />} />
        <Route path="/detailKelasPembayaran" element={<DetailKelasPembayaran />} />
      </Routes>
      {/* </Provider> */}
    </BrowserRouter>
  );
};
