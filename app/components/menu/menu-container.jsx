"use client";

import React, { useEffect } from "react";

import { motion } from "motion/react";

import { IoMdClose } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";

import MenuCartContent from "./menu-cart-content";
import MenuNavContent from "./menu-nav-content";
import MenuRefineContent from "./menu-refine-content";
import MenuSearchContainer from "./menu-search-container";

import { usePathname } from "next/navigation";

import { closeMenu } from "@/app/lib/features/menu-slice";
import { clearFilter } from "@/app/lib/features/filter-slice";

export default function MenuContainer() {
  const { type: menuType, isOpen: isMenuOpen } = useSelector(
    (state) => state.menu,
  );

  const dispatch = useDispatch();

  const pathname = usePathname();

  useEffect(() => {
    dispatch(clearFilter());
    dispatch(closeMenu());
  }, [dispatch, pathname]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        dispatch(closeMenu());
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [dispatch, isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector("body").style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.querySelector("body").style.overflow = "auto";
      document.querySelector("body").style.paddingRight = "0";
    }

    return () => {
      document.querySelector("body").style.overflow = "auto";
      document.querySelector("body").style.paddingRight = "0";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.div
        className="fixed right-0 top-0 z-[500] w-full bg-white sm:max-w-[30rem]"
        initial={{ x: "100%" }}
        animate={{
          x: isMenuOpen ? 0 : "100%",
          transition: { duration: 0.3 },
        }}
      >
        <div className="relative grid h-screen grid-cols-1 grid-rows-[auto_auto_1fr] overflow-y-auto px-sm lg:px-base">
          <div className="flex items-center justify-between pt-sm">
            <p className="text-2xl font-semibold uppercase">{menuType}</p>
            <button
              onClick={() => dispatch(closeMenu())}
              className="btn-custom-shape flex size-10 items-center justify-center text-3xl"
            >
              <IoMdClose />
            </button>
          </div>

          <div className="my-sm h-1 w-full bg-black"></div>

          {menuType === "cart" && <MenuCartContent />}
          {menuType === "navigation" && <MenuNavContent />}
          {menuType === "refine" && <MenuRefineContent />}
          {menuType === "search" && <MenuSearchContainer />}
        </div>
      </motion.div>

      <motion.div
        className="fixed inset-0 z-[400] bg-black"
        onClick={() => dispatch(closeMenu())}
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{
          opacity: isMenuOpen ? 0.3 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
