import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section>
      <div className="relative px-5 py-8 lg:px-10 lg:py-16">
        <div
          className="absolute left-0 top-0 h-3/4 w-full"
          style={{
            clipPath: "polygon(0 0,100% 0,100% calc(100% - 2vw - 5vh),0 100%)",
          }}
        >
          <Image
            src="/hero-image.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="h-full w-full"
          />
        </div>

        <div className="relative aspect-square w-full md:aspect-[2.8/1]">
          <Image
            src="/lego-world.jpeg"
            alt=""
            fill
            sizes="80vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
