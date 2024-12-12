"use client";

import React from "react";

import CheckoutProductItem from "./checkout-product-item";

import AccordionItem from "../ui/accordion/accordion-item";

import { currencyFormatter } from "../utils/currencyFormatter";

export default function CheckoutOrderSummary({ cartData }) {
  const { cartItems, totalQuantity, totalPrice } = cartData;

  return (
    <div className="h-full text-sm/none text-white lg:max-w-[36rem] lg:text-base/none">
      <AccordionItem
        label="order summary"
        className="bg-blue-600 p-sm text-white lg:hidden"
      >
        <div className="space-y-base p-sm lg:hidden">
          <ul className="space-y-sm">
            {cartItems.map((item) => (
              <li key={item.id}>
                <CheckoutProductItem product={item} />
              </li>
            ))}
          </ul>

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
                <span className="pr-xs text-sm font-normal opacity-60">
                  USD
                </span>
                {currencyFormatter.format(totalPrice)}
              </p>
            </div>
          </div>
        </div>
      </AccordionItem>

      <div className="hidden space-y-sm lg:block">
        <h3 className="mb-6 text-3xl font-semibold capitalize">
          Order summary
        </h3>

        <ul className="space-y-sm">
          {cartItems.map((item) => (
            <li key={item.id}>
              <CheckoutProductItem product={item} />
            </li>
          ))}
        </ul>

        <div className="">
          <div className="flex justify-between">
            <p>
              Subtotal - {totalQuantity} {totalQuantity ? "items" : "item"}{" "}
            </p>
            <p>{currencyFormatter.format(totalPrice)}</p>
          </div>

          <div className="mt-6 flex justify-between text-xl font-semibold">
            <p className="">Total</p>
            <p>
              <span className="pr-xs text-sm font-normal opacity-60">USD</span>
              {currencyFormatter.format(totalPrice)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
