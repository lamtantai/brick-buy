import React, { useState } from "react";

import { motion } from "motion/react";

import { IoIosArrowDown } from "react-icons/io";

import Link from "next/link";
import Image from "next/image";

import { legoThemes } from "../lib/data";

export default function DropdownThemes() {
  const [isThemesDropdown, setIsThemesDropdown] = useState(false);

  return (
    <div
      className="group flex h-full items-center"
      onMouseEnter={() => setIsThemesDropdown(true)}
      onMouseLeave={() => setIsThemesDropdown(false)}
    >
      <button className="relative flex items-center gap-x-3 uppercase">
        themes
        <motion.span
          animate={{ rotate: isThemesDropdown ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IoIosArrowDown />
        </motion.span>
        <div className="hover-underline" />
      </button>

      <motion.div
        className="fixed left-0 top-0 flex w-full translate-y-[--header-height] justify-center overflow-hidden bg-black text-white"
        initial={{ height: 0 }}
        animate={{ height: isThemesDropdown ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex gap-x-10 px-20 py-14">
          {legoThemes.map((theme) => (
            <li key={theme.themeName}>
              <Link href={theme.href}>
                <Image
                  src={theme.thumbnail}
                  alt="thumbnail theme"
                  width={300}
                  height={300}
                  loading="lazy"
                />
                <h3 className="text-xl capitalize">{theme.themeName}</h3>
                <h3 className="text-base normal-case opacity-80">
                  ({theme.products.length} products)
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function DropdownThemesMobile() {
  const [isThemesDropdown, setIsThemesDropdown] = useState(false);

  return (
    <div className="">
      <button
        className="flex w-full items-center justify-between uppercase"
        onClick={() => setIsThemesDropdown((prev) => !prev)}
      >
        themes
        <motion.span
          animate={{ rotate: isThemesDropdown ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IoIosArrowDown />
        </motion.span>
      </button>

      <motion.div
        className="overflow-hidden text-xl"
        initial={{ height: 0 }}
        animate={{ height: isThemesDropdown ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="pt-sm">
          {legoThemes.map((theme) => (
            <li key={theme.themeName}>
              <Link href={theme.href}>{theme.themeName}</Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
