"use client";

import ProductCard from "@/app/components/product-card";

import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import React, { useRef } from "react";

export default function AnotherProduct({ currentID, theme }) {
  const remainingProducts = theme.products.filter(
    (product) => product.id !== currentID,
  );

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
      <div className="mb-sm flex items-center justify-between px-sm pt-16 text-2xl md:text-4xl lg:text-6xl">
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
        {remainingProducts.map((product) => (
          <li
            key={product.id}
            className="w-[90%] max-w-[35rem] shrink-0 snap-start pl-sm last:mr-sm"
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
