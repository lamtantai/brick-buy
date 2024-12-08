import React from "react";

export default function ProductList({ children }) {
  return (
    <div className="grid auto-rows-fr gap-xs md:grid-cols-2 xl:grid-cols-4">
      {children}
    </div>
  );
}
