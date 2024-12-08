"use client";

import ProductItem from "@/app/components/product-item";

import React from "react";
import SliderContainer from "@/app/components/slider-container";

export default function AnotherProduct({ currentID, theme }) {
  const remainingProducts = theme.products.filter(
    (product) => product.id !== currentID,
  );

  return (
    <div className="p-sm text-2xl md:text-4xl lg:text-6xl">
      <SliderContainer>
        {remainingProducts.map((product) => (
          <li
            key={product.id}
            className="w-[90%] max-w-[35rem] shrink-0 snap-start snap-always"
          >
            <ProductItem product={product} />
          </li>
        ))}
      </SliderContainer>
    </div>
  );
}
