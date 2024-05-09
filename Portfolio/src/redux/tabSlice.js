import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab_index: 0,
};

const tabSlice = createSlice({
  name: "tabReducer",
  initialState,
  reducers: {
    setTabIndex(state, action) {
      state.tab_index = action.payload;
    },
  },
});

export const { setTabIndex } = tabSlice.actions;

export const getTabIndex = (state) => state.tab.tab_index;

export default tabSlice.reducer;
