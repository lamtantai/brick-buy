import Image from "next/image";
import Link from "next/link";
import React from "react";

import { VscLinkExternal } from "react-icons/vsc";
import { currencyFormatter } from "../utils/currencyFormatter";

export default function SmallProductItem({ product }) {
  return (
    <div className="grid max-w-[18.5rem] grid-cols-[3.5rem_1fr_3.5rem] gap-x-sm bg-card p-2">
      <div className="flex aspect-square items-center justify-center">
        <Image
          src={product.images[0]}
          alt="product image"
          width={56}
          height={56}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0 self-center text-lg font-semibold">
        <p className="overflow-hidden text-ellipsis text-nowrap">
          {product.name}
        </p>
        <p className="text-base opacity-70">
          {currencyFormatter.format(product.price)}
        </p>
      </div>

      <Link
        href={product.href}
        className="btn-custom-shape flex size-14 items-center justify-center"
      >
        <VscLinkExternal />
      </Link>
    </div>
  );
}
