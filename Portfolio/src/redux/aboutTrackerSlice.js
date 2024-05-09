import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  about_index: 0,
};

const aboutTrackerSlice = createSlice({
  name: "aboutTrackerReducer",
  initialState,
  reducers: {
    setAboutTrackerIndex(state, action) {
      state.about_index = action.payload;
    },
  },
});

export const { setAboutTrackerIndex } = aboutTrackerSlice.actions;

export const getAboutTrackerIndex = (state) => state.aboutTracker.about_index;

export default aboutTrackerSlice.reducer;
