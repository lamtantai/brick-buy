"use client";

import React, { useRef, useState } from "react";

import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";

export default function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const [debounceValue, setDebounceValue] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const searchedProducts = useMemo(
    () => searchProducts(debounceValue),
    [debounceValue],
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div className="relative">
        <span className="absolute left-sm top-1/2 -translate-y-1/2 text-xl">
          <HiOutlineSearch />
        </span>

        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          ref={inputRef}
          type="text"
          placeholder="Search Products..."
          className="w-full bg-card py-3 pl-[calc(var(--space-base)*2)] pr-[calc(var(--space-base)*3)]"
        />

        <button
          className="absolute right-sm top-1/2 -translate-y-1/2 font-bold uppercase"
          onClick={() => {
            setInputValue("");
            if (inputRef.current) inputRef.current.focus();
          }}
        >
          clear
        </button>
      </div>
  );
}
