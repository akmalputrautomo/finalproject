import { combineReducers } from "@reduxjs/toolkit";
import KategoriSlice from "./kategoribelajarr";
import authRegisterSlice from "./auth/authregister";
import otp from "./auth/otp";
import authSliceLoginUser from "./auth/authSliceLoginUser";
import forgetPassSlice from "./auth/forgetPassSlice";
import GetCoursePopular from "./GetCoursePopular";
import GetCourseDetail from "./GetCourseDetail";
import updatepasslicer from "../reducer/akun/UpdatePass";
import GetCourseAll from "./GetCourseAll";

export default combineReducers({
  kategori: KategoriSlice,
  regis: authRegisterSlice,
  authOtp: otp,
  loginUser: authSliceLoginUser,
  authPass: forgetPassSlice,
  coursePopular: GetCoursePopular,
  courseDetail: GetCourseDetail,
  courseAll: GetCourseAll,
  updatepass: updatepasslicer,
});
