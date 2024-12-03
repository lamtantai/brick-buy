import React from "react";

import { LuCake } from "react-icons/lu";
import { PiLegoLight } from "react-icons/pi";
import { PiHash } from "react-icons/pi";

import VideoPlayer from "./video-player";

export default function ProductDescription({ product, theme }) {
  return (
    <section>
      <div className="">
        <div className="p-sm font-bold lg:p-base">
          <h1 className="mb-6 text-4xl uppercase">{product.name}</h1>
          <span className="text-xl opacity-70">{product.price}</span>
          <p className="text-green-500">Available now</p>
        </div>

        <div className="my-8 grid grid-cols-3 divide-x-2 divide-black font-bold opacity-60">
          <ProductAttribute
            value={product.ages}
            text="ages"
            icon={<LuCake />}
          />
          <ProductAttribute
            value={product.pieces}
            text="pieces"
            icon={<PiLegoLight />}
          />
          <ProductAttribute
            value={product.id}
            text="product"
            icon={<PiHash />}
          />
        </div>

        <div className="flex flex-col gap-y-sm p-sm text-justify leading-tight lg:p-base">
          <h2 className="text-2xl font-extrabold">Description</h2>

          <p className="text-lg font-semibold">{product.description}</p>

          <h3 className="text-xl font-extrabold">Measurements</h3>

          <p className="font-semibold">
            <span className="pr-xs text-xl">&#x2022;</span>
            {product.size}
          </p>
        </div>

        <VideoPlayer src={product.video} />
      </div>
    </section>
  );
}

function ProductAttribute({ value, text, icon }) {
  return (
    <span className="flex flex-col items-center gap-y-sm">
      <span className="text-6xl">{icon}</span>
      <span className="text-2xl">{value}</span>
      <span className="text-sm capitalize">{text}</span>
    </span>
  );
}