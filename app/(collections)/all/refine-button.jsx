"use client";

import React from "react";

import { openMenu } from "@/app/lib/features/menu-slice";

import { LuSettings2 } from "react-icons/lu";
import { useDispatch } from "react-redux";

export default function RefineButton() {
  const dispatch = useDispatch();

  return (
    <button
      className="btn-custom-shape flex items-center gap-x-xs px-sm py-xs"
      onClick={() => dispatch(openMenu("refine"))}
    >
      <LuSettings2 />
      refine
    </button>
  );
}
