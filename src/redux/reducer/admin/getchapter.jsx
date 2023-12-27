import { createSlice } from "@reduxjs/toolkit";

const Chapter = createSlice({
  name: "Chapter",
  initialState: {
    Chapter: [],
  },
  reducers: {
    setChapter: (state, action) => {
      state.chapter = action.payload;
    },
  },
});

export const { setChapter } = Chapter.actions;

export default Chapter.reducer;
