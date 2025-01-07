import React from "react";

import Link from "next/link";
import { legoThemes } from "../lib/data";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-300 px-sm leading-[1.1] text-black lg:px-12">
      <div className="py-10 lg:py-20">
        <p className="mb-4 text-[clamp(2rem,1.3421rem+3.2895vw,4.5rem)] font-bold">
          Quick Links
        </p>

        <nav className="flex w-fit flex-col text-[clamp(1.25rem,0.9211rem+1.6447vw,2.5rem)] font-semibold capitalize text-gray-800">
          <Link href="/all" className="hover:underline">
            all
          </Link>

          {legoThemes.map((theme) => (
            <Link
              key={theme.themeName}
              href={theme.href}
              className="hover:underline"
            >
              {theme.themeName}
            </Link>
          ))}
        </nav>
      </div>

      <div className="pb-4 font-black uppercase text-[#1e3a8a] lg:pb-10">
        <p className="text-[clamp(3rem,1.385rem+6.8906vw,8rem)]">BrickBuy</p>

        <p className="text-[clamp(1.5rem,0.3158rem+5.9211vw,6rem)]">
          #LetsBuildTogether
        </p>
      </div>
    </footer>
  );
}
