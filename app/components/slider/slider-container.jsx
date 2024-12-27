"use client";

import React, { useRef } from "react";
import SliderButtonContainer from "./slider-button-container";
import ProductItem from "../product-item";
import SmallProductItem from "../small-product-item";

export default function SliderContainer({
  products,
  className,
  smallItem = false,
}) {
  const scrollContainer = useRef(null);

  return (
    <div className={className}>
      <div className="mb-sm flex items-center justify-between">
        <p className="font-bold uppercase">Recommended</p>

        <SliderButtonContainer scrollContainer={scrollContainer} />
      </div>

      <ul
        ref={scrollContainer}
        className="flex snap-x snap-mandatory gap-x-3 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {products.map((product) => (
          <li
            key={product.id}
            className={`shrink-0 snap-start ${smallItem ? "" : "w-[90%] max-w-[35rem]"}`}
          >
            {smallItem ? (
              <SmallProductItem product={product} />
            ) : (
              <ProductItem product={product} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
