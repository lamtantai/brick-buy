import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CheckoutProductItem({ product }) {
  return (
    <div className="flex items-center gap-x-sm">
      <Link
        href={product.href}
        className="relative flex size-16 flex-shrink-0 items-center justify-center rounded-md border border-[#646363] bg-[#3a3939]"
      >
        <Image
          src={product.image}
          alt="product image"
          width={64}
          height={64}
          className="h-full w-full scale-90 object-contain"
        />

        <div className="absolute -right-2 -top-2 rounded-full bg-card opacity-60">
          <div className="flex min-h-5 min-w-5 items-center justify-center px-1">
            <span className="text-sm/none font-semibold text-black">
              {product.quantity}
            </span>
          </div>
        </div>
      </Link>

      <Link href={product.href} className="flex-1 hover:underline">
        {product.name}
      </Link>

      <span>${product.price * product.quantity}</span>
    </div>
  );
}
