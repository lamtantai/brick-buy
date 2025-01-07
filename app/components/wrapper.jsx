"use client";

import React, { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, sendCartData } from "../lib/features/cart-actions";

export default function Wrapper({ children }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const isInitialRender = useRef(true);
  const prevTotalQuantity = useRef(cart.totalQuantity);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitialRender.current && !cart.changed) {
      isInitialRender.current = false;
      return;
    }

    if (cart.changed) {
      prevTotalQuantity.current = cart.totalQuantity;
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return <div>{children}</div>;
}
