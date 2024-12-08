"use client";

import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export default function AccordionItem({ name, expanded, children, className }) {
  const [isExpanded, setIsExpanded] = useState(expanded ? true : false);

  return (
    <div>
      <button
        className={twMerge(
          "flex w-full items-center justify-between text-5xl uppercase",
          className,
        )}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {name}
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IoIosArrowDown />
        </motion.span>
      </button>

      <motion.div
        className="overflow-hidden text-xl"
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-sm pt-sm">{children}</div>
      </motion.div>
    </div>
  );
}
