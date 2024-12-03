"use client";

import Image from "next/image";

import { AnimatePresence, motion } from "motion/react";

import React, { useState } from "react";

export default function ImageGallery({ product, theme }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative">
      <div className="grid lg:sticky lg:top-[--header-height] lg:grid-cols-[1fr_4fr]">
        <div className="relative overflow-hidden">
          <BackgroundImage
            backgroundTheme={theme.backgroundTheme}
            backgroundTheme1={theme.backgroundTheme1}
          />

          <AnimatePresence mode="wait">
            <motion.div
              className="relative aspect-[4/3]"
              key={currentIndex}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={product.images[currentIndex]}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="scale-90 object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <ul className="flex gap-xs p-xs lg:order-first lg:flex-col lg:py-0 xl:gap-sm xl:px-sm">
          {product.images.map((image, index) => {
            return (
              <li
                key={image}
                className={`relative aspect-[4/3] flex-1 cursor-pointer overflow-hidden bg-card transition-all duration-300 hover:brightness-75 ${currentIndex === index ? "pointer-events-none brightness-95" : "pointer-events-auto brightness-50"}`}
                onClick={() => setCurrentIndex(index)}
              >
                <BackgroundImage
                  backgroundTheme={theme.backgroundTheme}
                  backgroundTheme1={theme.backgroundTheme1}
                />

                <Image
                  src={image}
                  alt=""
                  sizes="(min-width: 1024px) 12.5vw, 25vw"
                  fill
                  className="object-contain"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function BackgroundImage({ backgroundTheme, backgroundTheme1 }) {
  return (
    <div className="absolute inset-0">
      <div
        className="h-full bg-cover"
        style={{ backgroundImage: `url(${backgroundTheme})` }}
      ></div>

      <div
        className="absolute bottom-0 h-2/5 w-full bg-cover"
        style={{
          clipPath: "polygon(0 0,100% 10vw,100% 100%,0 100%)",
          backgroundImage: `url(${backgroundTheme1}`,
        }}
      ></div>
    </div>
  );
}
