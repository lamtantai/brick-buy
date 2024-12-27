import React from "react";

import Image from "next/image";
import Link from "next/link";

import logo from "@/app/icon.png";

import NavBar from "./nav-bar";

import DropdownThemes from "./dropdown-themes";
import ProgressBar from "@/app/components/progress-bar";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-secondary">
        <div className="flex h-[--header-height] items-center justify-between px-3 lg:px-8">
          <div className="flex h-full items-center gap-x-10">
            <Link href="/" className="lg:size-14">
              <Image
                src={logo}
                alt="Website logo"
                width={45}
                height={45}
                className="h-full w-full"
              />
            </Link>

            <div className="hidden h-full items-center gap-x-10 text-xl font-semibold uppercase lg:flex">
              <div className="group flex h-full items-center">
                <Link href="/all" className="relative">
                  shop all
                  <div className="hover-underline" />
                </Link>
              </div>

              <DropdownThemes />
            </div>
          </div>

          <NavBar />
        </div>
      </header>
      <ProgressBar />
    </>
  );
}
