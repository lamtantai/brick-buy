import React from "react";

import { motion } from "motion/react";

import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tailwind-merge";

export default function AccordionTrigger({
  onClick,
  label,
  isExpanded,
  className,
}) {
  return (
    <button
      className={twMerge(
        "flex w-full items-center justify-between font-bold uppercase text-black",
        className,
      )}
      onClick={onClick}
    >
      {label}

      <motion.span
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <IoIosArrowDown />
      </motion.span>
    </button>
  );
}
