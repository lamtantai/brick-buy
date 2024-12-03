import React from "react";

import ProductCard, { ViewMoreCard } from "./product-card";
import ProductsWrapper from "./products-wrapper";

export default function ProductsByTheme({ theme }) {
  return (
    <div className="">
      <h2 className="mb-sm text-7xl font-black uppercase lg:text-9xl">
        {theme.themeName}
      </h2>

      <ProductsWrapper>
        {theme.products.slice(0, 3).map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}

        <div>
          <ViewMoreCard theme={theme} />
        </div>
      </ProductsWrapper>
    </div>
  );
}
