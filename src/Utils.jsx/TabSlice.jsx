import { createSlice } from "@reduxjs/toolkit";

const TabSlice = createSlice({
  name: "tabs",
  initialState: {},
  reducers: {
    activeTab: (state, action) => {
      state.state = action.payload;
    },
  },
});
export const { activeTab } = TabSlice.actions;
export default TabSlice.reducer;
