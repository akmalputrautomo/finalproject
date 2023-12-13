import { createSlice } from "@reduxjs/toolkit";


const initialState = { coursesPopular: [] };

const popularSlicer = createSlice({
  name: "coursePopular",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
  },
});

export const { setMovie } = popularSlicer.actions;

export default popularSlicer.reducer;