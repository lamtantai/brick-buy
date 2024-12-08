"use client";

import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from "@/app/lib/features/cart-slice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";

export default function CartItem({ product }) {
  const dispatch = useDispatch();

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

        <div className="flex justify-between">
          <span className="text-lg font-semibold opacity-70">
            {product.price}
          </span>

          <div className="flex items-center gap-x-sm">
            <button
              className="text-lg text-red-500 transition-colors duration-300 hover:text-red-400"
              onClick={() => dispatch(removeProductFromCart(product.id))}
            >
              <FiTrash2 />
            </button>

            <div className="flex items-center bg-card">
              <button
                className="p-2 transition-colors duration-300 hover:bg-gray-300"
                onClick={() => dispatch(decreaseProductQuantity(product.id))}
              >
                <FiMinus />
              </button>

              <span className="pointer-events-none px-2">
                {product.quantity}
              </span>

              <button
                className={`p-2 transition-colors duration-300 ${
                  product.quantity >= 5
                    ? "cursor-not-allowed bg-gray-200"
                    : "hover:bg-gray-300"
                }`}
                onClick={() => dispatch(increaseProductQuantity(product.id))}
                disabled={product.quantity >= 5}
              >
                <FiPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
