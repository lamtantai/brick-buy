"use client";

import ShowProductsContainer from "@/app/components/show-products-container";

import React from "react";

import searchProducts from "../utils/searchProducts";

import NoResults from "./no-results";

export default function SearchPageInner({ query }) {
  const searchedProducts = searchProducts(query);

  return searchedProducts.length === 0 ? (
    <NoResults query={query} />
  ) : (
    <ShowProductsContainer
      page={`Search - "${query}"`}
      products={searchedProducts}
    />
  );
}
