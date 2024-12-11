import React, { useState } from "react";

import InputField from "./input-filed";
import InputErrorMessage from "./input-error-message";

export default function CheckoutInputCode() {
  const [inputValue, setInputValue] = useState("");
  const [isValidCode, setIsValidCode] = useState(true);

  return (
    <div className="grid auto-rows-auto grid-cols-[1fr_auto] gap-x-sm">
      <InputField
        type="text"
        name="code"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Gift card or discount code"
        isValid={isValidCode}
      />

      <button
        onClick={() => {
          setIsValidCode(false);
          setInputValue("");
        }}
        className={`flex items-center rounded-md border px-sm transition-colors duration-200 ${inputValue ? "pointer-events-auto border-white bg-blue-600" : "pointer-events-none border-[#646363] bg-[#3a3939]"}`}
      >
        <span>Apply</span>
      </button>

      <InputErrorMessage
        isValid={isValidCode}
        errorMessage="This code did not match any active gift card or discount."
      />
    </div>
  );
}
