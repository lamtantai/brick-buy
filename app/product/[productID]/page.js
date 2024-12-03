import { legoThemes } from "@/app/lib/data";
import React from "react";
import ImageGallery from "./image-gallery";
import ProductDescription from "./product-description";
import AnotherProduct from "./another-product";

export default async function ProductDetail({ params }) {
  const param = (await params).productID;

  const currentTheme = legoThemes.find((theme) =>
    theme.products.some((product) => product.id === param),
  );
  const currentProduct = currentTheme?.products.find(
    (product) => product.id === param,
  );

  return (
    <>
      <div className="grid lg:grid-cols-[4fr_2fr]">
        <ImageGallery product={currentProduct} theme={currentTheme} />
        <ProductDescription product={currentProduct} theme={currentTheme} />
      </div>
      <AnotherProduct currentID={currentProduct.id} theme={currentTheme} />
    </>
  );
}
