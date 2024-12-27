import Link from "next/link";

import searchProducts from "@/app/lib/utils/searchProducts";

import React, { useEffect, useMemo, useState } from "react";
import SearchInputContainer from "./search-input-container";
import SearchedList from "./searched-list";

export default function MenuSearch() {
  const [inputValue, setInputValue] = useState("");
  const [debounceValue, setDebounceValue] = useState("");

  const searchedProducts = useMemo(
    () => searchProducts(debounceValue),
    [debounceValue],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div className="">
      <SearchInputContainer
        onChange={setInputValue}
        onClick={setInputValue}
        inputValue={inputValue}
      />

      <div className="pt-base capitalize">
        {!debounceValue && (
          <div className="text-xl">
            <p className="font-semibold">Top search terms</p>
            <div className="mt-sm flex flex-col gap-y-xs">
              <Link href={`/search?query=mario`} className="underline">
                mario
              </Link>
              <Link href={`/search?query=technic`} className="underline">
                technic
              </Link>
            </div>
          </div>
        )}

        {searchedProducts.length === 0 && debounceValue && (
          <div className="space-y-10 text-lg">
            <p className="overflow-hidden text-ellipsis text-nowrap normal-case">
              No result for <b>&quot;{debounceValue}&quot;</b>
            </p>

            <p>
              Try searching for <b>&quot;Mario&quot;</b> or{" "}
              <b>&quot;Technic&quot;</b>
            </p>
          </div>
        )}

        {searchedProducts.length > 0 && (
          <>
            <div className="pb-sm">
              <Link
                href={`/search?query=${inputValue}`}
                className="text-xl font-semibold text-red-500 underline"
              >
                see all results ({searchedProducts.length})
              </Link>
            </div>

            <SearchedList products={searchedProducts} inputValue={inputValue} />
          </>
        )}
      </div>
    </div>
  );
}
