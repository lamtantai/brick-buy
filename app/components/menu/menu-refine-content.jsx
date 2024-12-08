import React from "react";

import AccordionItem from "../accordion-item";

import { useDispatch, useSelector } from "react-redux";

import {
  clearFilter,
  setAgeRange,
  setPieceRange,
  setPriceRange,
  setSortBy,
  setTheme,
} from "@/app/lib/features/filter-slice";

import {
  ageFilters,
  pieceFilters,
  priceFilters,
  sortByFilters,
  themeFilters,
} from "@/app/utils/filterConfig";

import { IoMdCheckmark, IoMdAdd, IoMdClose } from "react-icons/io";

export default function MenuRefineContent() {
  const { sortBy, priceRange, theme, ageRange, pieceRange, allFilters } =
    useSelector((state) => state.filter);

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
    <div className="flex flex-col justify-between">
      <div className="space-y-sm pb-sm font-bold">
        <AccordionItem name="sort by" expanded>
          {sortByFilters.map((filter) => (
            <FilterOption
              label={filter.label}
              key={filter.value}
              onClick={() => dispatch(setSortBy(filter.value))}
              isSelected={sortBy === filter.value}
              radio
            />
          ))}
        </AccordionItem>

        <AccordionItem name="price">
          {priceFilters.map((filter) => (
            <FilterOption
              label={filter.label}
              key={filter.value}
              onClick={() => dispatch(setPriceRange(filter.value))}
              isSelected={priceRange.includes(filter.value)}
            />
          ))}
        </AccordionItem>

        <AccordionItem name="theme">
          {themeFilters.map((filter) => (
            <FilterOption
              label={filter.label}
              key={filter.value}
              onClick={() => dispatch(setTheme(filter.value))}
              isSelected={theme.includes(filter.value)}
            />
          ))}
        </AccordionItem>

        <AccordionItem name="age">
          {ageFilters.map((filter) => (
            <FilterOption
              label={filter.label}
              key={filter.value}
              onClick={() => dispatch(setAgeRange(filter.value))}
              isSelected={ageRange.includes(filter.value)}
            />
          ))}
        </AccordionItem>

        <AccordionItem name="piece">
          {pieceFilters.map((filter) => (
            <FilterOption
              label={filter.label}
              key={filter.value}
              onClick={() => dispatch(setPieceRange(filter.value))}
              isSelected={pieceRange.includes(filter.value)}
            />
          ))}
        </AccordionItem>
      </div>

      {allFilters.length > 0 && (
        <div className="sticky bottom-0 left-0 z-50 flex w-full gap-x-sm overflow-x-auto border-t border-black bg-white p-sm lg:px-base">
          <ClearFilterSpan
            clearAll
            label="clear filters"
            onClick={() => dispatch(clearFilter())}
          />
          <ul className="flex flex-nowrap gap-x-2">
            {allFilters.map((filter) => (
              <li key={filter}>
                <ClearFilterSpan
                  label={filter}
                  onClick={() => handleClear(filter)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ClearFilterSpan({ label, onClick, clearAll }) {
  return (
    <span
      className={`flex h-full w-fit cursor-pointer items-center gap-x-2 border border-slate-500 p-2 font-semibold ${clearAll ? "bg-black text-white" : ""}`}
      onClick={onClick}
    >
      <IoMdClose />
      <span className="text-nowrap font-mono text-2xl/none capitalize">
        {label}
      </span>
    </span>
  );
}

function FilterOption({ label, onClick, isSelected, radio }) {
  return (
    <div
      className="flex cursor-pointer items-center gap-x-sm"
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
