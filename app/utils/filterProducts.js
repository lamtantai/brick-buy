export const filterProducts = (legoThemes, filters) => {
  const { theme, priceRange, pieceRange, ageRange, sortBy } = filters;

  const filteredProducts = legoThemes
    .filter((themeName) =>
      theme.length ? theme.includes(themeName.themeName) : true,
    )
    .flatMap((theme) =>
      theme.products.filter((product) => {
        const matchesPrice =
          !priceRange.length ||
          (priceRange.includes("Under $100") && product.price < 100) ||
          (priceRange.includes("$100+") && product.price > 100);

        const matchesPiece =
          !pieceRange.length ||
          (pieceRange.includes("Under 1000") && product.pieces < 1000) ||
          (pieceRange.includes("1000+") && product.pieces > 1000);

        const matchesAge =
          !ageRange.length ||
          (ageRange.includes("Under 13") &&
            parseInt(product.ages.replace("+", "")) < 13) ||
          (ageRange.includes("13+") &&
            parseInt(product.ages.replace("+", "")) > 13);

        return matchesPrice && matchesPiece && matchesAge;
      }),
    );

  const sortedProducts = (products) => {
    if (!sortBy) return products;

    return products.sort((a, b) => {
      if (sortBy === "Price: High to Low") return b.price - a.price;
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Piece: High to Low") return b.pieces - a.pieces;
      if (sortBy === "Piece: Low to High") return a.pieces - b.pieces;
      return 0;
    });
  };

  return sortedProducts(filteredProducts);
};
