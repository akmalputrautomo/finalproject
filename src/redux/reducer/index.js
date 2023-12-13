import { combineReducers } from "@reduxjs/toolkit";
import KategoriSlice from "./kategoribelajarr";
import authRegisterSlice from "./auth/authregister";
import otp from "./auth/otp";
import authSliceLoginUser from "./auth/authSliceLoginUser";
import forgetPassSlice from "./auth/forgetPassSlice";

export default combineReducers({
  kategori: KategoriSlice,
  regis: authRegisterSlice,
  authOtp: otp,
  loginUser : authSliceLoginUser,
  authPass : forgetPassSlice
});
