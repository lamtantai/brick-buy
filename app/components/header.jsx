"use client";

import React from "react";

import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";

import { toggleCart, toggleMenu } from "../lib/features/menu-slice";
import { useDispatch, useSelector } from "react-redux";

import { HiOutlineSearch } from "react-icons/hi";
import CartLogo from "../ui/cart-logo";

import logo from "../icon.png";

import DropdownThemes from "./dropdown-themes";

export default function Header() {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const dispatch = useDispatch();

  console.log("header");

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b-2 bg-secondary">
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

            <div className="hidden h-full items-center gap-x-10 text-xl font-semibold uppercase lg:flex">
              <div className="group flex h-full items-center">
                <Link href="/all" className="relative">
                  shop all
                  <div className="hover-underline" />
                </Link>
              </div>

              <DropdownThemes />
            </div>
          </div>

          <div className="flex h-full items-center gap-x-5 text-2xl">
            <button className="h-full">
              <HiOutlineSearch />
            </button>

            <button
              className="relative h-full"
              onClick={() => dispatch(toggleCart())}
            >
              <CartLogo />
              <div className="absolute -right-1/2 top-[20%] flex size-5 items-center justify-center rounded-full bg-red-600">
                <span className="text-sm">0</span>
              </div>
            </button>

            <button
              className="relative h-full w-5 text-xl lg:hidden"
              onClick={() => dispatch(toggleMenu())}
            >
              <motion.div
                initial={false}
                animate={{
                  y: isMenuOpen ? 0 : "-200%",
                  rotate: isMenuOpen ? 45 : 0,
                  transition: { duration: 0.3 },
                }}
                className="absolute left-0 top-1/2 h-[2px] w-full bg-black"
              />
              <motion.div
                initial={false}
                animate={{
                  y: isMenuOpen ? 0 : "200%",
                  rotate: isMenuOpen ? -45 : 0,
                  transition: { duration: 0.3 },
                }}
                className="absolute left-0 top-1/2 h-[2px] w-full bg-black"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
