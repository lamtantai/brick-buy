import React from "react";

import { notFound } from "next/navigation";
import { legoThemes } from "@/app/lib/data";

import ProductDescription from "./components/product-description";
import ImageGallery from "./components/image-gallery";
import SliderContainer from "@/app/components/slider/slider-container";
import VideoPlayer from "./components/video-player";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer";

export default async function ProductDetail({ params }) {
  const param = (await params).productID;

  const product = legoThemes
    .flatMap((theme) => theme.products)
    .find((product) => product.id === param);

  if (!product) {
    notFound();
  }

  const currentTheme = legoThemes.find((theme) =>
    theme.products.some((product) => product.id === param),
  );

  const remainingProducts = currentTheme.products.filter(
    (product) => product.id !== product,
  );

  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-[4fr_2fr]">
        <section>
          <ImageGallery product={product} theme={currentTheme} />
        </section>

        <section>
          <ProductDescription product={product} theme={currentTheme} />
          <VideoPlayer src={product.video} />
        </section>
      </div>
      <SliderContainer
        className="p-sm text-3xl md:text-6xl"
        products={remainingProducts}
      />
      <Footer />
    </>
  );
}
