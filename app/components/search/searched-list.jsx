"use client";

import React from "react";
import Link from "next/link";

import ProductItem from "../product-item";
import { useDispatch } from "react-redux";
import { closeMenu } from "@/app/lib/features/menu-slice";

const MAX_PRODUCTS_LOAD = 4;

export default function SearchedList({ products, inputValue }) {
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="space-y-sm pb-sm">
        {products.slice(0, MAX_PRODUCTS_LOAD).map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>

      {products.length > MAX_PRODUCTS_LOAD && (
        <div className="flex justify-center pb-sm">
          <Link
            className="btn-custom-shape btn-size-md text-center"
            href={`/search?query=${inputValue}`}
            onClick={() => dispatch(closeMenu())}
          >
            see all results ({products.length})
          </Link>
        </div>
      )}
    </div>
  );
}
