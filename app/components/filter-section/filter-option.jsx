import React from "react";

import { IoMdAdd, IoMdCheckmark } from "react-icons/io";

export default function FilterOption({ label, onClick, isSelected, radio }) {
  return (
    <div
      className="flex cursor-pointer items-center gap-x-sm text-xl"
      onClick={onClick}
    >
      <button
        className={`flex size-6 items-center justify-center rounded-lg border border-slate-500 text-red-500 ${isSelected && radio ? "bg-red-500 text-white" : ""}`}
      >
        {isSelected && !radio && <IoMdCheckmark />}
        {isSelected && radio && <IoMdAdd />}
      </button>

      <p
        className={`select-none font-semibold capitalize ${isSelected ? "text-red-500" : ""}`}
      >
        {label}
      </p>
    </div>
  );
}
