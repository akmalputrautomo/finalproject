import { combineReducers } from "@reduxjs/toolkit";
import KategoriSlice from "./kategoribelajarr";

export default combineReducers({
  kategori: KategoriSlice,
});
