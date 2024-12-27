"use client";

import React from "react";

import RefineButton from "./refine-button";

import ProductList from "@/app/components/product-list";

import { filterProducts } from "@/app/lib/utils/filterProducts";
import { useSelector } from "react-redux";
import { legoThemes } from "@/app/lib/data";

export default function All() {
  const filter = useSelector((state) => state.filter);

  const filteredProducts = filterProducts(legoThemes, filter);

  return (
    <>
      <div className="flex items-center justify-between px-sm py-sm text-xl md:text-3xl">
        <h1 className="font-bold uppercase">
          All products <sup>({filteredProducts.length})</sup>
        </h1>

        <RefineButton />
      </div>

      <ProductList products={filteredProducts} />
    </>
  );
}
