import React from "react";

import { IoMdClose } from "react-icons/io";

export default function RemoveFilterButton({ label, onClick, clearAllButton }) {
  return (
    <span
      className={`flex h-full w-fit cursor-pointer items-center gap-x-2 border border-slate-500 p-2 ${clearAllButton ? "bg-black text-white" : ""}`}
      onClick={onClick}
    >
      <IoMdClose />
      <span className="text-nowrap font-mono text-2xl/none capitalize">
        {label}
      </span>
    </span>
  );
}
