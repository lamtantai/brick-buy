import { closeMenu } from "@/app/lib/features/menu-slice";

import searchProducts from "@/app/utils/searchProducts";

import Link from "next/link";

import React, { useEffect, useMemo, useRef, useState } from "react";

import { HiOutlineSearch } from "react-icons/hi";

import { useDispatch } from "react-redux";
import ProductItem from "../product-item";

const MAX_PRODUCTS_LOAD = 4;

export default function MenuSearchContainer() {
  const [inputValue, setInputValue] = useState("");
  const [debounceValue, setDebounceValue] = useState("");

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const searchedProducts = useMemo(
    () => searchProducts(debounceValue),
    [debounceValue],
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div className="">
      <div className="relative">
        <span className="absolute left-sm top-1/2 -translate-y-1/2 text-xl">
          <HiOutlineSearch />
        </span>

        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          ref={inputRef}
          type="text"
          placeholder="Search Products..."
          className="w-full bg-card py-3 pl-[calc(var(--space-base)*2)] pr-[calc(var(--space-base)*3)] font-medium"
        />

        <button
          className="absolute right-sm top-1/2 -translate-y-1/2 font-bold uppercase"
          onClick={() => {
            setInputValue("");
            if (inputRef.current) inputRef.current.focus();
          }}
        >
          clear
        </button>
      </div>

      <div className="pt-base capitalize">
        {debounceValue ? (
          searchedProducts.length > 0 ? (
            <>
              <div className="pb-sm">
                <Link
                  href={`/search?query=${inputValue}`}
                  onClick={() => dispatch(closeMenu())}
                  className="text-xl font-semibold text-red-500 underline"
                >
                  see all results ({searchedProducts.length})
                </Link>
              </div>

              <ul className="space-y-sm pb-sm">
                {searchedProducts.slice(0, MAX_PRODUCTS_LOAD).map((product) => (
                  <li key={product.id}>
                    <ProductItem product={product} />
                  </li>
                ))}
              </ul>

              {searchedProducts.length > MAX_PRODUCTS_LOAD && (
                <div className="flex justify-center pb-sm">
                  <Link
                    className="btn-custom-shape btn-size-md text-center"
                    href={`/search?query=${inputValue}`}
                    onClick={() => dispatch(closeMenu())}
                  >
                    see all results ({searchedProducts.length})
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-10 text-lg">
              <p className="overflow-hidden text-ellipsis text-nowrap normal-case">
                No result for <b>&quot;{debounceValue}&quot;</b>
              </p>

              <p>
                Try searching for <b>&quot;Mario&quot;</b> or{" "}
                <b>&quot;Technic&quot;</b>
              </p>
            </div>
          )
        ) : (
          <div className="text-xl">
            <p className="font-semibold">Top search terms</p>
            <div className="mt-sm flex flex-col gap-y-xs">
              <Link
                href={`/search?query=mario`}
                onClick={() => dispatch(closeMenu())}
                className="underline"
              >
                mario
              </Link>
              <Link
                href={`/search?query=technic`}
                onClick={() => dispatch(closeMenu())}
                className="underline"
              >
                technic
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
