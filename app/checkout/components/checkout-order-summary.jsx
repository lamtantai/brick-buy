"use client";

import React, { useEffect, useState } from "react";

import { notFound } from "next/navigation";

import AccordionItem from "@/app/components/accordion-item";
import CheckoutProductList from "./checkout-product-list";
import CheckoutTotalPrice from "./checkout-total-price";
import fetchData from "@/app/lib/utils/fetchData";
import LoadingSpinner from "@/app/components/loading-spinner";

export default function CheckoutOrderSummary() {
  const [cart, setCart] = useState();

  useEffect(() => {
    async function fetchCart() {
      const cartData = await fetchData(
        "https://brick-buys-default-rtdb.firebaseio.com/cart.json",
      );

      setCart(cartData);
    }

    fetchCart();
  }, []);

  if (!cart) {
    return <LoadingSpinner />;
  }

  const { cartItems, totalQuantity, totalPrice } = cart;

  if (totalQuantity === 0) {
    notFound();
  }

  return (
    <div className="h-full text-sm/none text-white lg:max-w-[36rem] lg:text-base/none">
      <AccordionItem
        label="order summary"
        className="bg-blue-600 p-sm text-white lg:hidden"
      >
        <div className="space-y-base p-sm lg:hidden">
          <CheckoutProductList products={cartItems} />

          <CheckoutTotalPrice
            totalPrice={totalPrice}
            totalQuantity={totalQuantity}
          />
        </div>
      </AccordionItem>

      <div className="hidden space-y-sm lg:block">
        <h3 className="mb-6 text-3xl font-semibold capitalize">
          Order summary
        </h3>
        <CheckoutProductList products={cartItems} />
        <CheckoutTotalPrice
          totalPrice={totalPrice}
          totalQuantity={totalQuantity}
        />
      </div>
    </div>
  );
}
