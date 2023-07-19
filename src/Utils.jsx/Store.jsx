import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./TabSlice";
import adminReducer from "./AdminSlice";
import userReducer from "./UserSlice.jsx";
const store = configureStore({
  reducer: {
    tabs: tabReducer,
    admin: adminReducer,
    user: userReducer

  },
});
export { store };
