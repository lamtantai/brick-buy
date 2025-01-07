import React from "react";

import Link from "next/link";
import Image from "next/image";

import CheckoutForm from "./components/checkout-form";

import logo from "@/app/icon.png";

import CheckoutOrderSummary from "./components/checkout-order-summary";

export default async function CheckoutPage() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-secondary">
        <div className="flex h-[--header-height] items-center px-3 lg:px-8">
          <Link href="/" className="lg:size-14">
            <Image
              src={logo}
              alt="Website logo"
              width={45}
              height={45}
              className="h-full w-full"
            />
          </Link>
        </div>
      </header>

      <section className="min-h-[calc(100vh-var(--header-height))] lg:grid lg:grid-cols-2">
        <div className="bg-[#333232] lg:order-last lg:p-14">
          <CheckoutOrderSummary />
        </div>
        <div className="relative flex justify-end p-sm lg:p-14">
          <CheckoutForm />
        </div>
      </section>
    </>
  );
}
