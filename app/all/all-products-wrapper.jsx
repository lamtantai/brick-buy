"use client";

import React, { useState } from "react";

import ProductsWrapper from "../components/products-wrapper";
import ProductCard from "../components/product-card";

import { legoThemes } from "../lib/data";

import { LuSettings2 } from "react-icons/lu";

const allProducts = legoThemes.flatMap((theme) => theme.products);

const technicThemeProducts = legoThemes.find(
  (theme) => theme.themeName === "technic",
).products;
const marioThemeProducts = legoThemes.find(
  (theme) => theme.themeName === "mario",
).products;
const avatarThemeProducts = legoThemes.find(
  (theme) => theme.themeName === "avatar",
).products;
const flowerThemeProducts = legoThemes.find(
  (theme) => theme.themeName === "flower",
).products;

export default function AllProductsWrapper() {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const displayedProducts = allProducts.slice(0, visibleCount);

  return (
    <section className="">
      <div className="flex items-center justify-between px-sm py-sm md:text-3xl">
        <h1 className="font-bold uppercase">
          All products <sup>({allProducts.length})</sup>
        </h1>

        <button className="clip-path-button flex items-center gap-x-xs px-sm py-xs">
          <LuSettings2 />
          refine
        </button>
      </div>

      <ProductsWrapper>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsWrapper>

      {visibleCount < allProducts.length && (
        <div className="flex items-center justify-center py-5">
          <button
            className="clip-path-button w-full max-w-96 py-3 md:w-1/2"
            onClick={() => handleLoadMore()}
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
}
