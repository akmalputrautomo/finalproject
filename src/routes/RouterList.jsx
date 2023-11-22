import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";
import { Provider } from "react-redux";
import OtpRegister from "../pages/auth/Otpregister";

export const RouterList = () => {
  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpRegister />} />
      </Routes>
      {/* </Provider> */}
    </BrowserRouter>
  );
};
