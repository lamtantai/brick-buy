"use client";

import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import React, { useRef } from "react";

export default function CartRecommendedProduct({ products }) {
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
    <section>
      <div className="mb-sm flex items-center justify-between px-sm pt-16">
        <h3 className="font-bold uppercase">Recommended</h3>

        <div className="flex gap-x-sm text-white md:gap-x-10">
          <button
            className="flex items-center justify-center rounded-full bg-black p-xs"
            onClick={() => scrollLeft()}
          >
            <IoMdArrowDropleft />
          </button>
          <button
            className="flex items-center justify-center rounded-full bg-black p-xs"
            onClick={() => scrollRight()}
          >
            <IoMdArrowDropright />
          </button>
        </div>
      </div>

      <ul
        ref={scrollRef}
        className="flex snap-x snap-mandatory scroll-pl-sm overflow-x-auto border-y py-sm"
        style={{ scrollbarWidth: "none" }}
      >
        {products.map((product) => (
          <li
            key={product.id}
            className="w-[90%] max-w-[35rem] shrink-0 snap-start pl-sm last:mr-sm"
          >
            <div className="h-20 w-full border border-red-500 bg-black"></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
