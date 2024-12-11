import React from "react";

import {
  setAgeRange,
  setPieceRange,
  setPriceRange,
  setSortBy,
  setTheme,
} from "@/app/lib/features/filter-slice";

import AccordionItem from "@/app/ui/accordion/accordion-item";

import FilterOption from "./filter-option";

import { useDispatch } from "react-redux";

import { legoThemes } from "@/app/lib/data";

const priceFilters = [
  { value: "Under $100", label: "Under $100", range: { min: 0, max: 100 } },
  { value: "$100+", label: "$100+", range: { min: 100, max: Infinity } },
];

const ageFilters = [
  { value: "Under 13", label: "Under 13" },
  { value: "13+", label: "13+" },
];

const sortByFilters = [
  { value: "Price: High to Low", label: "Price: High to Low" },
  { value: "Price: Low to High", label: "Price: Low to High" },

  { value: "Piece: High to Low", label: "Piece: High to Low" },
  { value: "Piece: Low to High", label: "Piece: Low to High" },
];

const pieceFilters = [
  { value: "Under 1000", label: "Under 1000" },
  { value: "1000+", label: "1000+" },
];

const themeFilters = legoThemes.map((theme) => ({
  value: theme.themeName,
  label: theme.themeName,
}));

export default function FilterSection({ filterState }) {
  const { sortBy, priceRange, theme, ageRange, pieceRange } = filterState;

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
