import Image from "next/image";

import React from "react";

import { PiHash, PiLegoLight } from "react-icons/pi";
import { LuCake } from "react-icons/lu";

import CartLogo from "../ui/cart-logo";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-secondary font-semibold">
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
            <span className="opacity-70">{product.price}</span>
          </div>

          <button className="clip-path-button flex size-14 items-center justify-center self-center">
            <CartLogo />
          </button>
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

export function ViewMoreCard({ theme }) {
  return (
    <div className="group relative flex h-full items-center justify-center overflow-hidden bg-card">
      <Image
        src={theme.thumbnailMore}
        alt=""
        sizes="(min-width: 640px) 50vw, (min-width: 1024) 33vw, 100vw"
        fill
        className="scale-110 object-cover brightness-[0.4] transition-transform duration-500 group-hover:scale-100"
      />
      <h3 className="text-center text-7xl font-black uppercase text-white mix-blend-exclusion group-hover:underline">
        view <br />
        more
      </h3>
      <Link href={theme.href} className="link-overlay" />
    </div>
  );
}
