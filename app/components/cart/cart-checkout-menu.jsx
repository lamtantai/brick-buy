"use client";

import { toggleCart } from "@/app/lib/features/menu-slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";

export default function CartCheckoutMenu() {
  const isCartOpen = useSelector((state) => state.menu.isCartOpen);
  const dispatch = useDispatch();
  return (
    <motion.div
      className="fixed right-0 top-0 z-[500] w-full pt-[--header-height] sm:w-[25rem]"
      initial={{ x: "100%" }}
      animate={{
        x: isCartOpen ? 0 : "100%",
        transition: { duration: 0.3 },
      }}
    >
      <div className="h-screen bg-red-500">
        <button
          onClick={() => dispatch(toggleCart())}
          className="bg-white text-6xl text-black"
        >
          click
        </button>
      </div>
    </motion.div>
  );
}
