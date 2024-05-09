import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import tabSlice from "./tabSlice";
import aboutTrackerSlice from "./aboutTrackerSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    tab: tabSlice,
    aboutTracker: aboutTrackerSlice,
  },
});

export default store;
