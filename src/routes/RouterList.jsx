import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";
import { Provider } from "react-redux";

export const RouterList = () => {
  return (
    <BrowserRouter>
    {/* <Provider store={store}> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    {/* </Provider> */}
    </BrowserRouter>
  );
};
