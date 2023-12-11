import { combineReducers } from "@reduxjs/toolkit";
import KategoriSlice from "./kategoribelajarr";
import authRegisterSlice from "./auth/authregister";
import otp from "./auth/otp";

export default combineReducers({
  kategori: KategoriSlice,
  regis: authRegisterSlice,
  authOtp: otp,
});
