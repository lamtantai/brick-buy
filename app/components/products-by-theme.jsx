import React from "react";

import ProductItem from "./product-item";
import ProductList from "./product-list";
import ViewMoreCard from "./view-more-card";

export default function ProductsByTheme({ theme }) {
  return (
    <div className="">
      <h2 className="mb-sm text-7xl font-black uppercase lg:text-9xl">
        {theme.themeName}
      </h2>

      <ProductList>
        {theme.products.slice(0, 3).map((product) => (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}

        <div>
          <ViewMoreCard theme={theme} />
        </div>
      </ProductList>
    </div>
  );
}
