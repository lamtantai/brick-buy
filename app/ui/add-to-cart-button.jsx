"use client";

import React from "react";

import CartLogo from "./cart-logo";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../lib/features/cart-slice";

export default function AddToCartButton({ product, text }) {
  const dispatch = useDispatch();

  return text ? (
    <button
      className="btn-custom-shape btn-size-md uppercase"
      onClick={() =>
        dispatch(
          addProductToCart({
            id: product.id,
            name: product.name,
            image: product.images[0],
            price: product.price,
            href: product.href,
          }),
        )
      }
    >
      {text}
    </button>
  ) : (
    <button
      className="btn-custom-shape flex size-14 items-center justify-center"
      onClick={() =>
        dispatch(
          addProductToCart({
            id: product.id,
            name: product.name,
            image: product.images[0],
            price: product.price,
            href: product.href,
          }),
        )
      }
    >
      <CartLogo />
    </button>
  );
}
