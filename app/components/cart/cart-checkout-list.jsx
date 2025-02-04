import React from "react";

import Image from "next/image";
import Link from "next/link";

import { currencyFormatter } from "@/app/lib/utils/currencyFormatter";
import { useDispatch } from "react-redux";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { updateQuantity } from "@/app/lib/features/cart-slice";

export default function CartCheckoutList({ products }) {
  return (
    <div className="-mt-sm flex flex-col divide-y">
      {products.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
    </div>
  );
}

function CartItem({ product }) {
  return (
    <div className="grid w-full grid-cols-[6.5rem_1fr] gap-x-sm py-base">
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
          className="text-xl font-semibold leading-none hover:underline"
        >
          {product.name}
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-lg/none font-semibold opacity-70">
            {currencyFormatter.format(product.price)}
          </span>

          <ButtonContainer product={product} />
        </div>
      </div>
    </div>
  );
}

function ButtonContainer({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-x-sm">
      <button
        className="p-2 transition-colors duration-300 hover:bg-gray-300"
        onClick={() =>
          dispatch(
            updateQuantity({
              productId: product.id,
              type: "decrement",
            }),
          )
        }
      >
        {product.quantity === 1 ? <FiTrash2 /> : <FiMinus />}
      </button>

      <span className="pointer-events-none px-2">{product.quantity}</span>

      <button
        className={`p-2 transition-colors duration-300 ${
          product.quantity >= 5
            ? "cursor-not-allowed bg-gray-200"
            : "hover:bg-gray-300"
        }`}
        onClick={() =>
          dispatch(
            updateQuantity({
              productId: product.id,
              type: "increment",
            }),
          )
        }
        disabled={product.quantity >= 5}
      >
        <FiPlus />
      </button>
    </div>
  );
}
