import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: { isMenuOpen: false, isCartOpen: false },
  reducers: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },

    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { toggleMenu, toggleCart } = menuSlice.actions;
export default menuSlice.reducer;
