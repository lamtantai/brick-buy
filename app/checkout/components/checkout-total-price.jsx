import React from "react";

import { currencyFormatter } from "@/app/lib/utils/currencyFormatter";

export default function CheckoutTotalPrice({ totalPrice, totalQuantity }) {
  return (
    <div className="">
      <div className="flex justify-between">
        <p>
          Subtotal - {totalQuantity} {totalQuantity ? "items" : "item"}{" "}
        </p>
        <p>{currencyFormatter.format(totalPrice)}</p>
      </div>

      <div className="mt-8 flex justify-between text-lg font-semibold">
        <p className="">Total</p>
        <p>
          <span className="pr-xs text-sm font-normal opacity-60">USD</span>
          {currencyFormatter.format(totalPrice)}
        </p>
      </div>
    </div>
  );
}
