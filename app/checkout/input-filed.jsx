import React from "react";

export default function InputField({
  type,
  name,
  value,
  onChange,
  placeholder,
  inputMode,
  isValid,
  pattern,
}) {
  return (
    <div className="relative flex-1">
      <input
        required
        inputMode={inputMode}
        id={name}
        name={name}
        type={type}
        pattern={pattern}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full cursor-text overflow-hidden rounded-md border uppercase text-black outline-none transition-all duration-200 focus:ring-1 ${
          !isValid
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-sky-500"
        } ${value ? "px-3 pb-1 pt-5" : "p-3"}`}
      />

      <label
        className={`pointer-events-none absolute left-[13.5px] top-3 text-ellipsis text-nowrap text-xs/none text-tertiary transition-all duration-200 ${value ? "-translate-y-1 opacity-100" : "translate-y-0 opacity-0"}`}
      >
        {placeholder}
      </label>
    </div>
  );
}
