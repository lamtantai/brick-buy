import React from "react";

import { useDispatch } from "react-redux";

import { openMenu } from "../lib/features/menu-slice";

export default function NoResults({ query }) {
  const dispatch = useDispatch();

  return (
    <div
      className="h-[calc(100vh-var(--header-height))]"
      style={{
        backgroundImage:
          "url(https://merch.riotgames.com/_next/static/media/wr.c453398d.png)",
      }}
    >
      <div
        className="h-52 w-full bg-contain bg-right bg-no-repeat lg:h-full"
        style={{
          backgroundImage:
            "url(https://merch.riotgames.com/assets/pattern-404.svg)",
        }}
      ></div>

      <div className="space-y-sm text-nowrap pl-base text-xl font-semibold lg:absolute lg:top-1/2">
        <h1 className="overflow-hidden text-ellipsis lg:text-3xl">
          {!query ? "No search term provided" : `No results for "${query}"`}
        </h1>

        <button
          onClick={() => dispatch(openMenu("search"))}
          className="btn-custom-shape w-fit !bg-[#4500d5] px-10 py-4 hover:!bg-[#3505a9]"
        >
          search products
        </button>
      </div>
    </div>
  );
}
