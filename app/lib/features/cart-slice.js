import { createSlice } from "@reduxjs/toolkit";

const calculateTotal = (state) => {
  state.totalQuantity = state.cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  state.totalPrice = state.cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );
};

const MAX_QUANTITY = 5;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
    type: "",
    changed: false,
  },

  reducers: {
    replaceCart(state, action) {
      state.cartItems = action.payload.cartItems;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },

    addToCart(state, action) {
      const targetProduct = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === targetProduct.id,
      );

      if (existingProduct) {
        if (existingProduct.quantity < MAX_QUANTITY) {
          existingProduct.quantity += 1;
        }
      } else {
        state.cartItems.push({ ...targetProduct, quantity: 1 });
      }

      state.type = "add";
      state.changed = true;

      calculateTotal(state);
    },

    updateQuantity(state, action) {
      state.type = "remove";

      const { productId, type } = action.payload;

      const existingProduct = state.cartItems.find(
        (item) => item.id === productId,
      );

      if (existingProduct) {
        if (type === "decrement") {
          if (existingProduct.quantity === 1) {
            state.cartItems = state.cartItems.filter(
              (item) => item.id !== productId,
            );
          } else {
            existingProduct.quantity -= 1;
          }
        } else if (type === "increment") {
          if (existingProduct.quantity < MAX_QUANTITY) {
            existingProduct.quantity += 1;
          }
        }
      }

      calculateTotal(state);
      state.changed = true;
    },

    clearCartItems(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.changed = true;
    },
  },
});

export const { replaceCart, addToCart, updateQuantity, clearCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;
