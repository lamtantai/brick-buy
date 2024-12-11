import React from "react";

import {
  clearAllFilters,
  setAgeRange,
  setPieceRange,
  setPriceRange,
  setTheme,
} from "@/app/lib/features/filter-slice";

import { useDispatch } from "react-redux";
import RemoveFilterButton from "./remove-filter-button";

export default function SelectedFilterContainer({ filterState }) {
  const { priceRange, theme, ageRange, pieceRange, allFilters } = filterState;

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
