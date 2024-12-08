import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CheckoutProductItem({ product }) {
  return (
    <div className="grid w-full grid-cols-[6.5rem_1fr] gap-x-sm py-base text-lg/none">
      <Link
        href={product.href}
        className="flex aspect-square items-center justify-center bg-card"
      >
        <Image
          src={product.image}
          alt="product image"
          width={100}
          height={100}
          className="h-full w-full scale-90 object-contain"
        />
      </Link>

      <div className="flex flex-col justify-between">
        <Link
          href={product.href}
          className="text-lg leading-none hover:underline"
        >
          {product.name}
        </Link>

        <span className="pb-sm text-base">Qty: {product.quantity}</span>

        <span className="text-red-700">
          ${product.price * product.quantity}
        </span>
      </div>
    </div>
  );
}
