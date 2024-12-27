"use client";

import React, { useState } from "react";

import ProductItem from "./product-item";

const PRODUCTS_PER_LOAD = 8;

export default function ProductList({ products }) {
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_LOAD);

  const displayedProducts =
    products.length <= PRODUCTS_PER_LOAD
      ? products
      : products.slice(0, visibleCount);

  function handleLoadMore() {
    setVisibleCount((prev) => prev + PRODUCTS_PER_LOAD);
  }

  return (
    <>
      <div className="grid auto-rows-fr gap-xs md:grid-cols-2 xl:grid-cols-4">
        {displayedProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="flex items-center justify-center py-5">
          <button
            className="btn-custom-shape w-1/2 max-w-96 py-3"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}
