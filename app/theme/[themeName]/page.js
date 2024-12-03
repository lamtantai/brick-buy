import React from "react";

export default async function ThemePage({ params }) {
  const param = (await params).themeName;
  console.log(param);
  return (
    <div className="relative z-50 mt-[80vh] text-5xl text-red-600">
      <h1>{param}</h1>
    </div>
  );
}
