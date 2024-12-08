import Link from "next/link";
import Image from "next/image";

import React from "react";

import AccordionItem from "../accordion-item";

import { legoThemes } from "@/app/lib/data";

export default function MenuNavContent() {
  return (
    <>
      <nav className="space-y-sm text-5xl font-bold uppercase">
        <Link href="/" className="block">
          home
        </Link>

        <Link href="/all" className="block">
          shop all
        </Link>

        <AccordionItem name="themes">
          <ul className="pt-sm">
            {legoThemes.map((theme) => (
              <li key={theme.themeName}>
                <Link href={theme.href}>{theme.themeName}</Link>
              </li>
            ))}
          </ul>
        </AccordionItem>
      </nav>

      <Image
        src="/menu.jpeg"
        alt="mario lego set"
        width={350}
        height={200}
        className="absolute bottom-0 left-0 h-auto w-full"
        loading="lazy"
      />
    </>
  );
}
