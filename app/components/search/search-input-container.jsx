"use client";

import React, { useEffect, useRef } from "react";
import { HiOutlineSearch } from "react-icons/hi";

export default function SearchInputContainer({
  onChange,
  onClick,
  inputValue,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="relative">
      <span className="absolute left-sm top-1/2 -translate-y-1/2 text-xl">
        <HiOutlineSearch />
      </span>

      <input
        onChange={(e) => onChange(e.target.value)}
        value={inputValue}
        ref={inputRef}
        type="text"
        placeholder="Search Products..."
        className="w-full bg-card py-3 pl-[calc(var(--space-base)*2)] pr-[calc(var(--space-base)*3)] font-medium"
      />

      <button
        className="absolute right-sm top-1/2 -translate-y-1/2 font-bold uppercase"
        onClick={() => {
          onClick("");
          inputRef.current.focus();
        }}
      >
        clear
      </button>
    </div>
  );
}
