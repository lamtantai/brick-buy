import React from "react";

import { legoThemes } from "../lib/data";
import ProductsByTheme from "./products-by-theme";

export default function AllThemeProducts() {
  return (
    <section>
      <div className="space-y-20 pt-20">
        {legoThemes.map((theme) => (
          <ProductsByTheme key={theme.themeName} theme={theme} />
        ))}
      </div>
    </section>
  );
}
