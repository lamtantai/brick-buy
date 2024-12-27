"use client";

import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "@/app/lib/features/menu-slice";

import CartLogo from "@/app/components/cart-logo";
import { HiOutlineMenuAlt4, HiOutlineSearch } from "react-icons/hi";

export default function NavBar() {
  const dispatch = useDispatch();

  return (
    <div className="flex h-full items-center gap-x-5 text-2xl">
      <button className="h-full" onClick={() => dispatch(openMenu("search"))}>
        <HiOutlineSearch />
      </button>

      <button className="h-full" onClick={() => dispatch(openMenu("cart"))}>
        <div className="relative">
          <CartLogo />
          <TotalQuantitySpan />
        </div>
      </button>

      <button
        className="relative flex h-full items-center lg:hidden"
        onClick={() => dispatch(openMenu("navigation"))}
      >
        <span className="translate-y-[5%] text-3xl">
          <HiOutlineMenuAlt4 />
        </span>
      </button>
    </div>
  );
}

function TotalQuantitySpan() {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <div className="absolute -right-3 -top-3 rounded-full bg-red-500">
      <div className="flex min-h-5 min-w-5 items-center justify-center px-1">
        <span className="text-sm/none font-semibold text-white">
          {totalQuantity ? totalQuantity : 0}
        </span>
      </div>
    </div>
  );
}
