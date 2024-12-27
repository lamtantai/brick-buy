"use client";

import React from "react";

import CartLogo from "./cart-logo";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../lib/features/cart-slice";

export default function AddToCartButton({ product, text }) {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const { id, name, images, price, href } = product;

  const isLimited = cartItems.find((item) => item.id === id)?.quantity === 5;

  function handleAddToCart() {
    dispatch(
      addToCart({
        id,
        name,
        price,
        href,
        image: images[0],
      }),
    );
  }

  return text ? (
    <button
      className={`btn-custom-shape btn-size-md uppercase ${isLimited && "pointer-events-none opacity-50"}`}
      onClick={handleAddToCart}
    >
      {text}
    </button>
  ) : (
    <button
      className={`btn-custom-shape flex size-14 items-center justify-center ${isLimited && "pointer-events-none opacity-50"}`}
      onClick={handleAddToCart}
    >
      <CartLogo />
    </button>
  );
}
