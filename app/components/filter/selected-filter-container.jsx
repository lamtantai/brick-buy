import React from "react";

import {
  clearAllFilters,
  setAgeRange,
  setPieceRange,
  setPriceRange,
  setTheme,
} from "@/app/lib/features/filter-slice";

import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";

export default function SelectedFilterContainer() {
  const { priceRange, theme, ageRange, pieceRange, allFilters } = useSelector(
    (state) => state.filter,
  );

  const dispatch = useDispatch();

  const handleClear = (label) => {
    if (priceRange.includes(label)) {
      dispatch(setPriceRange(label));
    } else if (theme.includes(label)) {
      dispatch(setTheme(label));
    } else if (ageRange.includes(label)) {
      dispatch(setAgeRange(label));
    } else if (pieceRange.includes(label)) {
      dispatch(setPieceRange(label));
    }
  };

  return (
    allFilters.length > 0 && (
      <div className="sticky bottom-0 left-0 z-50 flex gap-x-sm overflow-x-auto border-t border-black bg-white p-sm font-semibold">
        <RemoveFilterButton
          clearAllButton
          label="clear all"
          onClick={() => dispatch(clearAllFilters())}
        />

        <ul className="flex flex-nowrap gap-x-2">
          {allFilters.map((filter) => (
            <li key={filter}>
              <RemoveFilterButton
                label={filter}
                onClick={() => handleClear(filter)}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

function RemoveFilterButton({ label, onClick, clearAllButton }) {
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
