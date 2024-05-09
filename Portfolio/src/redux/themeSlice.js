import { createSlice } from "@reduxjs/toolkit";
import { getSessionTheme, setSessionTheme } from "../utils/sessionData";

const initialState = {
  theme: getSessionTheme() || "dark",
};

const themeSlice = createSlice({
  name: "themeReducer",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
      setSessionTheme(state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const getTheme = (state) => state.theme.theme;

export default themeSlice.reducer;
