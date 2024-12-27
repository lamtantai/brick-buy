import React from "react";

import { notFound } from "next/navigation";

import ProductList from "@/app/components/product-list";
import searchProducts from "@/app/lib/utils/searchProducts";

export default async function SearchPage({ searchParams }) {
  const query = (await searchParams)?.query || "";

  const searchedProducts = searchProducts(query);

  if (searchedProducts.length === 0) {
    notFound();
  }

  return (
    <>
      <div className="flex items-center justify-between px-sm py-sm text-xl md:text-3xl">
        <h1 className="font-bold uppercase">Search - &quot;{query}&quot;</h1>
      </div>

      <ProductList products={searchedProducts} />
    </>
  );
}
