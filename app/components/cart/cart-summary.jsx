import React from "react";
import { useSelector } from "react-redux";

export default function CartSummary() {
  const { totalPrice, totalQuantity } = useSelector((state) => state.cart);

  return (
    <div className="border-y py-base lg:text-lg">
      <p className="text-3xl font-bold uppercase">summary</p>

      <div className="flex items-center justify-between pt-base">
        <p>
          Subtotal ({totalQuantity} {totalQuantity > 1 ? "items" : "item"})
        </p>
        <p>
          <span className="text-sm font-semibold opacity-70 lg:text-base">
            USD
          </span>{" "}
          <b>({totalPrice.toFixed(2)})</b>
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p>Shipping & Tax</p>
        <b>Calculated at next step</b>
      </div>
    </div>
  );
}
