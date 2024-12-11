"use client";

import React from "react";

import { motion } from "motion/react";

import { useSelector } from "react-redux";

export default function ProgressBar() {
  const { notificationStatus } = useSelector((state) => state.notification);
  return (
    notificationStatus === "pending" && (
      <motion.div
        className="fixed left-0 top-[--header-height] z-50 h-2 w-full origin-left bg-red-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0.8 }}
        transition={{ duration: 15 }}
      ></motion.div>
    )
  );
}
