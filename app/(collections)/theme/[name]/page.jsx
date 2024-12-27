import React from "react";

import { legoThemes } from "@/app/lib/data";

import ProductList from "@/app/components/product-list";
import { notFound } from "next/navigation";

export default function ThemePage({ params }) {
  const param = params.name;

  const isValidTheme = legoThemes.some((theme) => theme.themeName === param);

  if (!isValidTheme) {
    notFound();
  }

  const products = legoThemes
    .filter((theme) => theme.themeName === param)
    .flatMap((theme) => theme.products);

  return (
    <>
      <div className="flex items-center justify-between px-sm py-sm text-xl md:text-3xl">
        <h1 className="font-bold uppercase">
          {param} <sup>({products.length})</sup>
        </h1>
      </div>

      <ProductList products={products} />
    </>
  );
}
