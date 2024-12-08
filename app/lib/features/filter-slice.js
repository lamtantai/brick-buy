import { createSlice } from "@reduxjs/toolkit";

const toggleItemInArray = (state, selected) => {
  if (state.includes(selected)) {
    state = state.filter((filter) => filter !== selected);
  } else {
    return [...state, selected];
  }

  return state;
};

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    sortBy: "",
    priceRange: [],
    theme: [],
    ageRange: [],
    pieceRange: [],
    allFilters: [],
  },

  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },

    setPriceRange(state, action) {
      const selectedPriceRange = action.payload;

      state.allFilters = toggleItemInArray(
        state.allFilters,
        selectedPriceRange,
      );

      state.priceRange = toggleItemInArray(
        state.priceRange,
        selectedPriceRange,
      );
    },

    setTheme(state, action) {
      const selectedTheme = action.payload;

      state.allFilters = toggleItemInArray(state.allFilters, selectedTheme);

      state.theme = toggleItemInArray(state.theme, selectedTheme);
    },

    setAgeRange(state, action) {
      const selectedAge = action.payload;

      state.allFilters = toggleItemInArray(state.allFilters, selectedAge);

      state.ageRange = toggleItemInArray(state.ageRange, selectedAge);
    },

    setPieceRange(state, action) {
      const selectedPieceRange = action.payload;

      state.allFilters = toggleItemInArray(
        state.allFilters,
        selectedPieceRange,
      );

      state.pieceRange = toggleItemInArray(
        state.pieceRange,
        selectedPieceRange,
      );
    },

    clearFilter(state) {
      state.priceRange = [];
      state.theme = [];
      state.ageRange = [];
      state.pieceRange = [];
      state.allFilters = [];
    },
  },
});

export const {
  setSortBy,
  setPriceRange,
  setTheme,
  setAgeRange,
  setPieceRange,
  clearFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
