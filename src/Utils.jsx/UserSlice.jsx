import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUserPreviewData: (state, action) => {
      state.arr = action.payload;
    },
    addUserAddRole: (state, action) => {
      state.formData = action.payload;
    },
    UserCheckedListArr: (state, action) => {
      state.checkedUserArr = action.payload;
    },
    takeArrFromUser: (state, action) => {
      state.defaultArr = action.payload;
    },
    storeMainObj: (state, action) => {
      // console.log(action.payload);
      state.reduxObj = action.payload;
    },
  },
});
export const {
  storeMainObj,
  userObjStored,
  userCheckedListArr,
  addUserPreviewData,
  addUserAddRole,
  takeArrFromUser,
} = UserSlice.actions;
export default UserSlice.reducer;
