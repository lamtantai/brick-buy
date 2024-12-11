import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function ErrorPage({ errorMessage }) {
  return (
    <div
      className="relative h-[calc(100vh-var(--header-height))] overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://merch.riotgames.com/_next/static/media/wr.c453398d.png)",
      }}
    >
      <div
        className="absolute right-0 top-0 -z-10 h-52 w-full bg-contain bg-right bg-no-repeat lg:h-full"
        style={{
          backgroundImage:
            "url(https://merch.riotgames.com/assets/pattern-404.svg)",
        }}
      ></div>

      <div className="flex h-full flex-col items-center gap-y-base pb-10 pt-[calc(15vh+5vw)] lg:flex-row lg:justify-between lg:p-base">
        <div className="text-center lg:text-start">
          <h1 className="overflow-hidden text-ellipsis text-[clamp(3.75rem,2.7rem+4.5vw,8rem)]/none font-black uppercase">
            oh bricks!
          </h1>
          <h2 className="mb-8 mt-3 text-[clamp(1.875rem,1.6019rem+1.165vw,3rem)]/none font-semibold">
            {errorMessage}
          </h2>

          <Link
            href="/"
            className="btn-custom-shape inline-block !bg-[#4500d5] px-10 py-4 hover:!bg-[#3505a9]"
          >
            Back home
          </Link>
        </div>

        <Image
          src="/page-not-found-image.png"
          alt="not found image"
          width={555}
          height={855}
          className="h-auto w-1/2 lg:w-2/6"
        />
      </div>
    </div>
  );
}
