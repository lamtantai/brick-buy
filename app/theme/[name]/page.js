import React from "react";

import ShowProductsContainer from "@/app/components/show-products-container";

import { legoThemes } from "@/app/lib/data";

export default async function ThemePage({ params }) {
  const param = (await params).name;

  const productsTheme = legoThemes
    .filter((theme) => theme.themeName === param)
    .flatMap((theme) => theme.products);

  return <ShowProductsContainer products={productsTheme} page={param} />;
}
