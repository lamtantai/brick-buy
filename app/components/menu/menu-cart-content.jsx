import React from "react";

import CartItem from "../cart/cart-item";
import CartSummary from "../cart/cart-summary";

import { legoThemes } from "@/app/lib/data";

import { useDispatch, useSelector } from "react-redux";

import SliderContainer from "../slider-container";
import SmallProductItem from "../small-product-item";
import Link from "next/link";

export default function MenuCartContent() {
  const randomNumber = Math.floor(Math.random() * 1000000);

  const { totalQuantity, cartItems } = useSelector((state) => state.cart);

  return (
    <div className="flex flex-col justify-between">
      <div className="">
        {totalQuantity > 0 && (
          <>
            <div className="-mt-sm flex flex-col divide-y">
              {cartItems.map((product) => (
                <CartItem product={product} key={product.id} />
              ))}
            </div>
            <CartSummary />
          </>
        )}

        {!totalQuantity && (
          <>
            <p className="py-20 text-center text-3xl font-black uppercase">
              your cart is empty
            </p>
          </>
        )}

        <div className="py-base text-2xl">
          <SliderContainer products={legoThemes[2].products}>
            {legoThemes[1].products.map((product) => (
              <li key={product.id} className="shrink-0 snap-start">
                <SmallProductItem product={product} />
              </li>
            ))}
          </SliderContainer>
        </div>
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
