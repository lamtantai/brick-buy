import React from "react";

import { motion } from "motion/react";
import { MdError } from "react-icons/md";
import Image from "next/image";
import { currencyFormatter } from "@/app/utils/currencyFormatter";

export default function NotificationItem({ status, latestAddedItem }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.2 }}
      className="rounded-md border bg-white p-3"
    >
      {status === "success" && (
        <SuccessNotification latestAddedItem={latestAddedItem} />
      )}
      {status === "error" && <ErrorNotification />}
    </motion.div>
  );
}

function SuccessNotification({ latestAddedItem }) {
  return (
    <div className="grid grid-cols-[3.5rem_1fr] gap-x-sm">
      <div className="flex aspect-square items-center justify-center bg-card">
        {latestAddedItem.image && (
          <Image
            src={latestAddedItem.image}
            alt="product image"
            width={56}
            height={56}
            className="h-full w-full scale-90 object-contain"
          />
        )}
      </div>

      <div className="flex min-w-0 flex-col justify-between font-semibold">
        <p className="overflow-hidden text-ellipsis text-nowrap text-lg/none">
          {latestAddedItem.name}
        </p>
        <p className="text-ellipsis text-nowrap text-sm opacity-60">
          {currencyFormatter.format(product.price)}
        </p>
        <p className="text-sm uppercase text-red-500">added to cart</p>
      </div>
    </div>
  );
}

function ErrorNotification() {
  return (
    <div className="flex items-center gap-x-sm rounded-2xl font-semibold">
      <span>
        <MdError />
      </span>
      Max quantity reached for this product.
    </div>
  );
}
