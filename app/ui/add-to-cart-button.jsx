"use client";

import React from "react";

import CartLogo from "./cart-logo";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../lib/features/cart-slice";

export default function AddToCartButton({ product, text }) {
  const dispatch = useDispatch();

  const { notificationStatus } = useSelector((state) => state.notification);

  return text ? (
    <button
      className="btn-custom-shape btn-size-md uppercase"
      disabled={notificationStatus === "pending"}
      onClick={() =>
        dispatch(
          addToCart({
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
      disabled={notificationStatus === "pending"}
      onClick={() =>
        dispatch(
          addToCart({
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
