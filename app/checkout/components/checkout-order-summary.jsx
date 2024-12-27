import React, { Suspense } from "react";

import fetchData from "@/app/lib/utils/fetchData";

import { notFound } from "next/navigation";

import AccordionItem from "@/app/components/accordion-item";
import CheckoutProductList from "./checkout-product-list";
import CheckoutTotalPrice from "./checkout-total-price";
import LoadingSpinner from "@/app/components/loading-spinner";

async function Carts() {
  const { cartItems, totalQuantity, totalPrice } = await fetchData(
    "https://brick-buys-default-rtdb.firebaseio.com/cart.json",
  );

  if (!totalQuantity) {
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

export default function CheckoutOrderSummary() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Carts />
    </Suspense>
  );
}
