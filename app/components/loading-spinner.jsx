import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center">
      <div className="rounded-3xl bg-black/80 p-10">
        <div className="h-20 w-20 animate-spin rounded-full border-8 border-green-200 border-t-green-500"></div>
      </div>
    </div>
  );
}
