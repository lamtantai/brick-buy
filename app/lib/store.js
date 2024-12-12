import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./features/menu-slice";
import filterReducer from "./features/filter-slice";
import cartReducer from "./features/cart-slice";
import notificationReducer from "./features/notification-slice";
import modalReducer from "./features/modal-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      menu: menuReducer,
      filter: filterReducer,
      cart: cartReducer,
      notification: notificationReducer,
      modal: modalReducer,
    },
  });
};
