"use client";

import React, { useState } from "react";

import AccordionTrigger from "./accordion-trigger";
import AccordionContent from "./accordion-content";

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
