"use client";

import Image from "next/image";

import React, { useState } from "react";

export default function ImageGallery({ product, theme }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = product.images;

  return (
    <div className="grid lg:sticky lg:top-[--header-height] lg:grid-cols-[1fr_4fr]">
      <div className="relative aspect-[4/3] overflow-hidden lg:order-last">
        <ImageWrapper src={images[currentIndex]} theme={theme} />
      </div>

      <ul className="flex gap-xs p-xs lg:flex-col lg:px-sm lg:py-0 xl:gap-sm">
        {images.map((image, index) => {
          return (
            <li
              key={image}
              className={`aspect-[4/3] flex-1 cursor-pointer overflow-hidden bg-card transition-all duration-300 ${currentIndex === index ? "pointer-events-none brightness-90" : "pointer-events-auto brightness-50"}`}
              onClick={() => setCurrentIndex(index)}
            >
              <ImageWrapper src={image} theme={theme} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ImageWrapper({ src, theme }) {
  return (
    <div
      className="relative h-full w-full"
      style={{ backgroundImage: `url(${theme.backgroundTheme})` }}
    >
      <div
        className="absolute bottom-0 h-2/5 w-full bg-cover"
        style={{
          clipPath: "polygon(0 0,100% 40%,100% 100%,0 100%)",
          backgroundImage: `url(${theme.backgroundTheme1}`,
        }}
      />

      <Image src={src} alt="" fill className="scale-90 object-contain" />
    </div>
  );
}
