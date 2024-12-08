import { legoThemes } from "../lib/data";

export const priceFilters = [
  { value: "Under $100", label: "Under $100", range: { min: 0, max: 100 } },
  { value: "$100+", label: "$100+", range: { min: 100, max: Infinity } },
];

export const ageFilters = [
  { value: "Under 13", label: "Under 13" },
  { value: "13+", label: "13+" },
];

export const sortByFilters = [
  { value: "Price: High to Low", label: "Price: High to Low" },
  { value: "Price: Low to High", label: "Price: Low to High" },

  { value: "Piece: High to Low", label: "Piece: High to Low" },
  { value: "Piece: Low to High", label: "Piece: Low to High" },
];

export const pieceFilters = [
  { value: "Under 1000", label: "Under 1000" },
  { value: "1000+", label: "1000+" },
];

export const themeFilters = legoThemes.map((theme) => ({
  value: theme.themeName,
  label: theme.themeName,
}));
