import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function ViewMoreCard({ theme }) {
  return (
    <div
      className="group relative flex h-full items-center justify-center overflow-hidden bg-card"
      // style={{ backgroundImage: `url(${theme.thumbnailMore})` }}
    >
      <Image
        src={theme.thumbnailMore}
        alt=""
        sizes="(min-width: 640px) 50vw, (min-width: 1024) 33vw, 100vw"
        fill
        className="scale-110 object-cover brightness-[0.4] transition-transform duration-500 group-hover:scale-100"
      />

      <h3 className="text-center text-7xl font-black uppercase text-white mix-blend-exclusion group-hover:underline">
        view <br />
        more
      </h3>

      <Link href={`/theme/${theme.themeName}`} className="link-overlay" />
    </div>
  );
}
