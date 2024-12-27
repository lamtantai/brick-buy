import React from "react";

import {
  setAgeRange,
  setPieceRange,
  setPriceRange,
  setSortBy,
  setTheme,
} from "@/app/lib/features/filter-slice";

import AccordionItem from "@/app/components/accordion-item";

import { useDispatch, useSelector } from "react-redux";

import { legoThemes } from "@/app/lib/data";
import { IoMdAdd, IoMdCheckmark } from "react-icons/io";

const sortByFilters = [
  { value: "Price: High to Low", label: "Price: High to Low" },
  { value: "Price: Low to High", label: "Price: Low to High" },

  { value: "Piece: High to Low", label: "Piece: High to Low" },
  { value: "Piece: Low to High", label: "Piece: Low to High" },
];

const priceFilters = [
  { value: "Under $100", label: "Under $100", range: { min: 0, max: 100 } },
  { value: "$100+", label: "$100+", range: { min: 100, max: Infinity } },
];

const themeFilters = legoThemes.map((theme) => ({
  value: theme.themeName,
  label: theme.themeName,
}));

const ageFilters = [
  { value: "Under 13", label: "Under 13" },
  { value: "13+", label: "13+" },
];

const pieceFilters = [
  { value: "Under 1000", label: "Under 1000" },
  { value: "1000+", label: "1000+" },
];

export default function FilterOptionList() {
  const { sortBy, priceRange, theme, ageRange, pieceRange } = useSelector(
    (state) => state.filter,
  );

  const dispatch = useDispatch();

  const filterSections = [
    {
      label: "sort by",
      filters: sortByFilters,
      action: setSortBy,
      state: sortBy,
      singleSelect: true,
    },

    {
      label: "price",
      filters: priceFilters,
      action: setPriceRange,
      state: priceRange,
    },

    { label: "theme", filters: themeFilters, action: setTheme, state: theme },

    { label: "age", filters: ageFilters, action: setAgeRange, state: ageRange },

    {
      label: "piece",
      filters: pieceFilters,
      action: setPieceRange,
      state: pieceRange,
    },
  ];

  return (
    <div className="space-y-sm pb-sm text-5xl font-bold">
      {filterSections.map(({ label, filters, action, state, singleSelect }) => (
        <div key={label}>
          <AccordionItem label={label} expanded={label === "sort by"}>
            <div className="space-y-4 py-sm">
              {filters.map((filter) => (
                <FilterOption
                  label={filter.label}
                  key={filter.value}
                  onClick={() => dispatch(action(filter.value))}
                  isSelected={
                    singleSelect
                      ? state === filter.value
                      : state.includes(filter.value)
                  }
                  radio={singleSelect}
                />
              ))}
            </div>
          </AccordionItem>
        </div>
      ))}
    </div>
  );
}

function FilterOption({ label, onClick, isSelected, radio }) {
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
