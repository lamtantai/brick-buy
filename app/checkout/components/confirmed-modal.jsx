import React from "react";

import { useRouter } from "next/navigation";

import { IoIosCheckmarkCircle } from "react-icons/io";

import BackgroundLayer from "@/app/components/background-layer";

export default function ConfirmedModal({ isOpen }) {
  const router = useRouter();

  return (
    <>
      <BackgroundLayer
        isOpen={isOpen}
        onClick={() => {
          router.replace("/");
        }}
      />

      <div
        className="fixed left-1/2 top-1/2 z-[9999] w-3/4 max-w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-black bg-white p-sm"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="flex flex-col items-center justify-center">
          <span className="text-7xl text-green-500 xl:text-9xl">
            <IoIosCheckmarkCircle />
          </span>

          <p className="text-[clamp(1.25rem,0.9335rem+1.3502vw,2.25rem)] font-bold capitalize">
            Your order is confirmed!
          </p>
          <p className="text-sm font-semibold lg:text-lg">
            Thanks for your order 😁
          </p>

          <button
            className="mt-10 max-w-40 rounded-xl border-2 border-green-500 px-sm py-xs text-lg text-green-500 lg:text-2xl"
            onClick={() => {
              router.replace("/");
            }}
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
}
