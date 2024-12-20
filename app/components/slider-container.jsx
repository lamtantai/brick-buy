"use client";

import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import React, { useRef } from "react";

export default function SliderContainer({ products, children }) {
  const scrollRef = useRef(null);

  function scrollLeft() {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const childWidth = container.firstChild
        ? container.firstChild.offsetWidth
        : 0;

      container.scrollBy({
        left: -childWidth,
        behavior: "smooth",
      });
    }
  }

  function scrollRight() {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const childWidth = container.firstChild
        ? container.firstChild.offsetWidth
        : 0;

      container.scrollBy({
        left: childWidth,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <div className="mb-sm flex items-center justify-between">
        <p className="font-bold uppercase">Recommended</p>

        <div className="flex gap-x-sm text-white md:gap-x-10">
          <button
            className="flex items-center justify-center rounded-full bg-black p-xs hover:opacity-80"
            onClick={() => scrollLeft()}
          >
            <IoMdArrowDropleft />
          </button>
          <button
            className="flex items-center justify-center rounded-full bg-black p-xs hover:opacity-80"
            onClick={() => scrollRight()}
          >
            <IoMdArrowDropright />
          </button>
        </div>
      </div>

      <ul
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-x-3 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </ul>
    </>
  );
}
