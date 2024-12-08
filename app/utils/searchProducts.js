import Fuse from "fuse.js";

import { legoThemes } from "../lib/data";

const products = legoThemes.flatMap((theme) => theme.products);

export default function searchProducts(searchValue) {
  const optionsSearchByTheme = {
    threshold: 0.3,
    includeScore: true,
    keys: ["themeName"],
  };
  const optionsSearchByName = {
    includeScore: true,
    keys: ["name"],
  };

  const fuseTheme = new Fuse(legoThemes, optionsSearchByTheme);
  const fuseName = new Fuse(products, optionsSearchByName);

  const resultByTheme = fuseTheme.search(searchValue);
  const resultByName = fuseName.search(searchValue);

  const searchedProducts = () => {
    const combinedProducts = resultByTheme
      .flatMap((result) => result.item.products)
      .concat(resultByName.map((result) => result.item));

    const uniqueProducts = combinedProducts.reduce((acc, product) => {
      if (!acc.find((item) => item.id === product.id)) {
        acc.push(product);
      }

      return acc;
    }, []);

    return uniqueProducts;
  };

  return searchedProducts();
}
