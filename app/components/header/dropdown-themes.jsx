"use client";

import React, { useEffect, useState } from "react";

import { motion } from "motion/react";

import { IoIosArrowDown } from "react-icons/io";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { legoThemes } from "@/app/lib/data";

export default function DropdownThemes() {
  const [isThemesDropdown, setIsThemesDropdown] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsThemesDropdown(false);
  }, [pathname]);

  return (
    <div
      className="group flex h-full items-center"
      onMouseEnter={() => setIsThemesDropdown(true)}
      onMouseLeave={() => setIsThemesDropdown(false)}
    >
      <button className="relative flex items-center gap-x-3 uppercase">
        theme
        <motion.span
          animate={{ rotate: isThemesDropdown ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IoIosArrowDown />
        </motion.span>
        <div className="hover-underline" />
      </button>

      <motion.div
        className="fixed left-0 top-0 flex w-full translate-y-[--header-height] justify-center overflow-hidden bg-white text-black"
        initial={{ height: 0 }}
        animate={{ height: isThemesDropdown ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex gap-x-10 px-20 py-14">
          {legoThemes.map((theme) => (
            <li key={theme.themeName}>
              <Link href={`/theme/${theme.themeName}`}>
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
