import React from "react";

import { legoThemes } from "@/app/lib/data";

import { useSelector } from "react-redux";

import Link from "next/link";

import CartCheckoutList from "./cart-checkout-list";
import CartSummary from "./cart-summary";
import SliderContainer from "../slider/slider-container";

export default function MenuCart() {
  const { totalQuantity, cartItems } = useSelector((state) => state.cart);

  return (
    <div className="flex flex-col justify-between">
      <div className="">
        {totalQuantity > 0 ? (
          <>
            <CartCheckoutList products={cartItems} />
            <CartSummary />
          </>
        ) : (
          <p className="py-20 text-center text-3xl font-black uppercase">
            your cart is empty
          </p>
        )}

        <SliderContainer
          products={legoThemes[2].products}
          className="py-base text-3xl"
          smallItem
        />
      </div>

      {totalQuantity > 0 && (
        <div className="sticky bottom-0 left-0 z-50 flex w-full justify-center border-t border-black bg-white py-sm">
          <Link
            href={`/checkout`}
            className="btn-custom-shape btn-size-md text-center"
          >
            check out
          </Link>
        </div>
      )}
    </div>
  );
}
