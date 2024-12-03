import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./features/menu-slice";

export const makeStore = () => {
  return configureStore({
    reducer: { menu: menuReducer },
  });
};
