import fetchData from "@/app/utils/fetchData";
import { replaceCart } from "./cart-slice";
import { showNotification } from "./notification-slice";

export function fetchCartData() {
  return async (dispatch) => {
    try {
      const cartData = await fetchData(
        "https://brick-buys-default-rtdb.firebaseio.com/cart.json",
      );
      dispatch(
        replaceCart({
          cartItems: cartData.cartItems || [],
          totalQuantity: cartData.totalQuantity,
          totalPrice: cartData.totalPrice,
        }),
      );
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(showNotification("pending"));
    async function sendCartData() {
      const response = await fetch(
        "https://brick-buys-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            cartItems: cart.cartItems,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send cart data.");
      }
    }

    try {
      await sendCartData();
      dispatch(showNotification("success"));
    } catch (error) {
      console.log(error.message);
      dispatch(showNotification("error"));
    }
  };
}
