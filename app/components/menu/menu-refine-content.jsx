import React from "react";

import { useSelector } from "react-redux";

import FilterSection from "../filter-section/filter-section";
import SelectedFilterContainer from "../filter-section/selected-filter-container";

export default function MenuRefineContent() {
  const filterState = useSelector((state) => state.filter);

  return (
    <div className="flex flex-col justify-between">
      <FilterSection filterState={filterState} />

      <SelectedFilterContainer filterState={filterState} />
    </div>
  );
}
