import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./features/menu-slice";
import filterReducer from "./features/filter-slice";
import cartReducer from "./features/cart-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      menu: menuReducer,
      filter: filterReducer,
      cart: cartReducer,
    },
  });
};
