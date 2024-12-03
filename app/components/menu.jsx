"use client";

import React, { useEffect } from "react";

import { motion } from "motion/react";

import Link from "next/link";
import Image from "next/image";

import { toggleMenu } from "../lib/features/menu-slice";

import { useDispatch, useSelector } from "react-redux";

import { DropdownThemesMobile } from "./dropdown-themes";

export default function Menu() {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const dispatch = useDispatch();

  const handleMenuClick = (e) => {
    if (e.target.tagName === "A") {
      dispatch(toggleMenu());
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.querySelector("body").style.overflow = "hidden";
    }

    return () => {
      document.querySelector("body").style.overflow = "auto";
    };
  }, [isMenuOpen]);

  console.log("menu");

  return (
    <motion.div
      className="fixed right-0 top-0 z-20 h-screen w-full bg-black pt-[--header-height] text-white sm:w-[25rem] lg:hidden"
      initial={{ x: "100%" }}
      animate={{
        x: isMenuOpen ? 0 : "100%",
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="fixed inset-0 h-screen w-screen bg-black"
        onClick={() => dispatch(toggleMenu())}
        initial={{ opacity: 0, display: "none" }}
        animate={{
          opacity: isMenuOpen ? 0.3 : 0,
          display: isMenuOpen ? "block" : "none",
          transition: { duration: 0.6 },
        }}
      />

      <div
        className="p-sm relative flex h-full flex-col items-center justify-between"
        onClick={handleMenuClick}
      >
        <nav className="w-full uppercase">
          <div className="space-y-sm text-5xl font-semibold">
            <Link href="/" className="block">
              home
            </Link>

            <Link href="/all" className="block">
              shop all
            </Link>

            <DropdownThemesMobile />
          </div>
        </nav>

        <Image
          src="/menu.jpeg"
          alt="mario lego set"
          width={250}
          height={250}
          className="h-auto w-full"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}
