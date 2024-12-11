import React from "react";

import { motion } from "motion/react";

export default function AccordionContent({ children, isExpanded }) {
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
