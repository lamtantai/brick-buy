import React from "react";

import SearchPageInner from "./search-page-inner";

export default async function SearchPage({ searchParams }) {
  const query = (await searchParams)?.query || "";

  return <SearchPageInner query={query} />;
}
