"use client";

import React, { useState } from "react";

import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
import { IoIosArrowDown } from "react-icons/io";

export default function AccordionItem({
  label,
  expanded,
  children,
  className,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded ? true : false);

  return (
    <>
      <AccordionTrigger
        onClick={() => setIsExpanded((prev) => !prev)}
        label={label}
        isExpanded={isExpanded}
        className={className}
      />
      <AccordionContent isExpanded={isExpanded}>{children}</AccordionContent>
    </>
  );
}

function AccordionContent({ children, isExpanded }) {
  return (
    <motion.div
      className="overflow-hidden"
      initial={{ height: 0 }}
      animate={{ height: isExpanded ? "auto" : 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function AccordionTrigger({ onClick, label, isExpanded, className }) {
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
