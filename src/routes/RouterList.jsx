import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../auth/user/Register";
import { Login } from "../auth/user/Login";
import { LoginUser } from "../auth/user/LoginUser";
import { Provider } from "react-redux";
import OtpRegister from "../auth/user/Otpregister";
import { ForgetPass } from "../auth/user/ForgetPass";
import { BerandaKelasSaya } from "../pages/BerandaKelasSaya";
import { BerandaKelas } from "../pages/BerandaKelas";
import { DetailKelas } from "../assets/components/DetailKelas";
import { DetailKelasPembayaran } from "../assets/components/DetailKelasPembayaran";
import { LoginAdmin } from "../auth/admin/LoginAdmin";
import { HomeAdm } from "../pages/admin/HomeAdm";
import { WebAkunProfil } from "../pages/notifikasi/WebAkunProfil";
import WebNotifikasi from "../assets/components/WebNotifikasi";

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
        <Route path="/kelassaya" element={<BerandaKelasSaya />} />
        <Route path="/berandakelas" element={<BerandaKelas />} />
        <Route path="/detailKelas" element={<DetailKelas />} />
        <Route path="/detailKelasPembayaran" element={<DetailKelasPembayaran />} />
        <Route path="/WebAkunProfil" element={<WebAkunProfil />} />
        <Route path="/WebNotifikasi" element={<WebNotifikasi />} />

        {/* Admin */}
        <Route path="/loginAdm" element={<LoginAdmin />} />
        <Route path="/HomeAdm" element={<HomeAdm />} />
        {/* Admin End */}
      </Routes>
      {/* </Provider> */}
    </BrowserRouter>
  );
};
