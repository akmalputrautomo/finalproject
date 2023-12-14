import { createSlice } from "@reduxjs/toolkit";

const initialState = { coursesPopular: "" };

const akunprofileslicer = createSlice({
  name: "akunprofile",
  initialState,
  reducers: {
    setakunprofile: (state, action) => {
      state.coursesPopular = action.payload;
    },
  },
});

export const { setakunprofile } = akunprofileslicer.actions;

export default akunprofileslicer.reducer;
