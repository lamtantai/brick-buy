"use client";

import React from "react";

import { motion } from "motion/react";

export default function BackgroundLayer({ onClick, isOpen }) {
  return (
    <motion.div
      className="fixed inset-0 z-[400] bg-black"
      onClick={onClick}
      initial={{ opacity: 0, pointerEvents: "none" }}
      animate={{
        opacity: isOpen ? 0.3 : 0,
        pointerEvents: isOpen ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
    />
  );
}
