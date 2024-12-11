"use client";

import React, { useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { openMenu } from "../lib/features/menu-slice";

import { useDispatch, useSelector } from "react-redux";

import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import CartLogo from "../ui/cart-logo";

import logo from "../icon.png";

import DropdownThemes from "./dropdown-themes";
import { usePathname } from "next/navigation";
import { fetchCartData, sendCartData } from "../lib/features/cart-actions";
import ProgressBar from "../ui/progress-bar";

export default function Header() {
  const dispatch = useDispatch();

  const pathname = usePathname();

  const cart = useSelector((state) => state.cart);

  const isInitialRender = useRef(true);
  const prevTotalQuantity = useRef(cart.totalQuantity);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    console.log(cart.latestAddedItem);

    if (cart.changed && prevTotalQuantity.current !== cart.totalQuantity) {
      prevTotalQuantity.current = cart.totalQuantity;
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-secondary">
        <div className="flex h-[--header-height] items-center justify-between px-3 lg:px-8">
          <div className="flex h-full items-center gap-x-10">
            <Link href="/" className="lg:size-14">
              <Image
                src={logo}
                alt="Website logo"
                width={45}
                height={45}
                className="h-full w-full"
              />
            </Link>

            {pathname.startsWith("/checkout") ? (
              ""
            ) : (
              <div className="hidden h-full items-center gap-x-10 text-xl font-semibold uppercase lg:flex">
                <div className="group flex h-full items-center">
                  <Link href="/all" className="relative">
                    shop all
                    <div className="hover-underline" />
                  </Link>
                </div>

                <DropdownThemes />
              </div>
            )}
          </div>

          {pathname.startsWith("/checkout") ? (
            ""
          ) : (
            <div className="flex h-full items-center gap-x-5 text-2xl">
              <button
                className="h-full"
                onClick={() => dispatch(openMenu("search"))}
              >
                <HiOutlineSearch />
              </button>

              <button
                className="h-full"
                onClick={() => dispatch(openMenu("cart"))}
              >
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
          )}
        </div>
      </header>
      <ProgressBar />
    </>
  );
}

function TotalQuantitySpan() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="absolute -right-3 -top-3 rounded-full bg-red-500">
      <div className="flex min-h-5 min-w-5 items-center justify-center px-1">
        <span className="text-sm/none font-semibold text-white">
          {cart.totalQuantity}
        </span>
      </div>
    </div>
  );
}
