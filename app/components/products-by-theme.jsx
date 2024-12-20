import React from "react";

import ProductItem from "./product-item";
import ProductList from "./product-list";
import Link from "next/link";

export default function ProductsByTheme({ theme }) {
  return (
    <div className="">
      <div className="mb-sm flex items-end justify-between font-black uppercase md:px-10">
        <h2 className="text-6xl lg:text-9xl">{theme.themeName}</h2>

        <div className="btn-custom-shape !bg-black px-2 py-1 !text-white hover:opacity-80">
          <Link
            href={`/theme/${theme.themeName}`}
            className="text-xl/none lg:text-4xl/none"
          >
            more
          </Link>
        </div>
      </div>

      <ProductList>
        {theme.products.slice(0, 4).map((product) => (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </ProductList>
    </div>
  );
}
