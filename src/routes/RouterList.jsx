import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";
import { LoginUser } from "../pages/auth/LoginUser";
import { Provider } from "react-redux";
import OtpRegister from "../pages/auth/Otpregister";
import { ForgetPass } from "../pages/auth/ForgetPass";
import { BerandaKelasSaya } from "../pages/BerandaKelasSaya";
import { BerandaKelas } from "../pages/BerandaKelas";
import { DetailKelas } from "../assets/components/DetailKelas";
import { DetailKelasPembayaran } from "../assets/components/DetailKelasPembayaran";
import PembayaranSukses from "../pages/PembayaranSukses";
import { MulaiBelajar } from "../assets/components/MulaiBelajar";

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
        <Route path="/kelassaya" element={<BerandaKelasSaya/>} />
        <Route path="/berandakelas" element={<BerandaKelas/>}/>
        <Route path="/detailKelas" element={<DetailKelas />} />
        <Route path="/detailKelasPembayaran" element={<DetailKelasPembayaran />} />
        <Route path="/pembayaranSukses" element={<PembayaranSukses />} />
        <Route path="/mulaiBelajar" element={<MulaiBelajar />} />
      </Routes>
      {/* </Provider> */}
    </BrowserRouter>
  );
};
