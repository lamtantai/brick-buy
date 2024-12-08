"use client";

import React from "react";

import ShowProductsContainer from "../components/show-products-container";

import { useSelector } from "react-redux";

import { filterProducts } from "../utils/filterProducts";

import { legoThemes } from "../lib/data";

export default function AllProductsPage() {
  const filter = useSelector((state) => state.filter);

  const filteredProducts = filterProducts(legoThemes, filter);

  return (
    <ShowProductsContainer
      products={filteredProducts}
      hasFilter
      page="All products"
    />
  );
}
