import React from "react";

export default function InputErrorMessage({ isValid, errorMessage }) {
  return (
    !isValid && (
      <div className="mt-3">
        <p className="text-red-400">{errorMessage}</p>
      </div>
    )
  );
}
