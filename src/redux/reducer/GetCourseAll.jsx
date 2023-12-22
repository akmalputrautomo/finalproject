import { createSlice } from "@reduxjs/toolkit";

const allSlicer = createSlice({
  name: "courseAllAuth",
  initialState: {
    coursesAll: ""
  },
  reducers: {
    setCourseAll: (state, action) => {
      state.coursesAll = action.payload;
    },
  }
});

export const { setCourseAll } = allSlicer.actions;

export default allSlicer.reducer