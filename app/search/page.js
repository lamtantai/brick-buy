import React from "react";

import searchProducts from "../utils/searchProducts";

import ShowProductsContainer from "../components/show-products-container";
import ErrorPage from "../ui/error-page";

export default async function SearchPage({ searchParams }) {
  const query = (await searchParams)?.query || "";

  const searchedProducts = searchProducts(query);

  const errorMessage = !query
    ? "No search term provided."
    : `No results for "${query}".`;

  return searchedProducts.length === 0 ? (
    <ErrorPage errorMessage={errorMessage} />
  ) : (
    <ShowProductsContainer
      page={`Search - "${query}"`}
      products={searchedProducts}
    />
  );
}
