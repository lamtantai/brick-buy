import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    type: "",
    isOpen: false,
  },

  reducers: {
    openMenu(state, action) {
      state.type = action.payload;
      state.isOpen = true;
    },

    closeMenu(state) {
      state.type = "";
      state.isOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
