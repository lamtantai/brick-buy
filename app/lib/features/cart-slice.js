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
  },

  reducers: {
    addProductToCart(state, action) {
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

      calculateTotal(state);
    },

    removeProductFromCart(state, action) {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);

      calculateTotal(state);
    },

    increaseProductQuantity(state, action) {
      const productId = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === productId,
      );

      if (existingProduct && existingProduct.quantity < MAX_QUANTITY) {
        existingProduct.quantity += 1;
      }

      calculateTotal(state);
    },

    decreaseProductQuantity(state, action) {
      const productId = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === productId,
      );

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== productId,
          );
        } else {
          existingProduct.quantity -= 1;
        }
      }

      calculateTotal(state);
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
