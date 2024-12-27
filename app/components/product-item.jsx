import Image from "next/image";
import Link from "next/link";

import React from "react";

import { PiHash, PiLegoLight } from "react-icons/pi";
import { LuCake } from "react-icons/lu";

import AddToCartButton from "./add-to-cart-button";
import { currencyFormatter } from "../lib/utils/currencyFormatter";

export default function ProductItem({ product }) {
  return (
    <div className="group border bg-card text-base font-semibold">
      <Link href={product.href} className="relative block aspect-[4/3]">
        <Image
          src={product.images[0]}
          alt="product thumbnail image"
          sizes="(min-width: 640px) 50vw, (min-width: 1024) 33vw, 100vw"
          fill
          className="scale-90 object-contain transition-transform duration-500 group-hover:scale-95"
        />
      </Link>

      <div className="space-y-sm border-t p-3">
        <div className="flex gap-x-sm opacity-60">
          <ProductAttribute value={product.ages} icon={<LuCake />} />
          <ProductAttribute value={product.pieces} icon={<PiLegoLight />} />
          <ProductAttribute value={product.id} icon={<PiHash />} />
        </div>

        <div className="grid grid-cols-[auto_3.5rem] gap-x-sm">
          <div className="flex h-16 flex-col justify-between">
            <Link href={product.href} className="hover:underline">
              <h3 className="text-lg/none font-bold">{product.name}</h3>
            </Link>
            <span className="opacity-70">
              {currencyFormatter.format(product.price)}
            </span>
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

function ProductAttribute({ value, icon }) {
  return (
    <span className="flex items-center gap-x-xs">
      <span className="text-lg">{icon}</span>
      {value}
    </span>
  );
}
