import React from "react";

import FilterOptionList from "./filter-option-list";
import SelectedFilterContainer from "./selected-filter-container";

export default function MenuFilter() {
  return (
    <div className="flex flex-col justify-between">
      <FilterOptionList />

      <SelectedFilterContainer />
    </div>
  );
}
