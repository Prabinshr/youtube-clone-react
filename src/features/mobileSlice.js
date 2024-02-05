import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobile: false,
  pc: true,
};

const mobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    toggleMobile: (state) => {
      state.mobile = state.mobile === false ? true : false;
      
    },
    mobileMenu: (state) => {
      state.mobile = true;
      state.pc = false;
    },
    pcMenu: (state) => {
      state.mobile = false;
      state.pc = true;
    },
  },
});

export const { mobileMenu,pcMenu,toggleMobile } = mobileSlice.actions;
export default mobileSlice.reducer;
