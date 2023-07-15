import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./TabSlice";
const store = configureStore({
  reducer: {
    tabs: tabReducer,
  },
});
export { store };
