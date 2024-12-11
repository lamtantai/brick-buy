"use client";

import React, { useState } from "react";

import { LuSettings2 } from "react-icons/lu";

import ProductList from "./product-list";
import ProductItem from "./product-item";

import { useDispatch } from "react-redux";
import { openMenu } from "../lib/features/menu-slice";

const PRODUCTS_PER_LOAD = 8;

export default function ShowProductsContainer({ hasFilter, page, products }) {
  const dispatch = useDispatch();

  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_LOAD);

  const displayedProducts =
    products.length <= PRODUCTS_PER_LOAD
      ? products
      : products.slice(0, visibleCount);

  return (
    <section>
      <div
        className="min-h-[calc(100vh-var(--header-height))] bg-card bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://cdn.sanity.io/images/dsfx7636/consumer_products/63d45bd66cd9a321f771feb465eb72cafdc776d4-2176x1912.webp)",
        }}
      >
        <div className="flex items-center justify-between px-sm py-sm text-xl md:text-3xl">
          <h1 className="font-bold uppercase">
            {page} <sup>({products.length})</sup>
          </h1>

          {hasFilter && (
            <button
              className="btn-custom-shape flex items-center gap-x-xs px-sm py-xs"
              onClick={() => dispatch(openMenu("refine"))}
            >
              <LuSettings2 />
              refine
            </button>
          )}
        </div>

        <ProductList>
          {displayedProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ProductList>

        {visibleCount < products.length && (
          <div className="flex items-center justify-center py-5">
            <button
              className="btn-custom-shape w-1/2 max-w-96 py-3"
              onClick={() =>
                setVisibleCount((prev) => prev + PRODUCTS_PER_LOAD)
              }
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
