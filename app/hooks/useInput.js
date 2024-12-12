import { useState } from "react";

export default function useInput(value) {
  const [formData, setFormData] = useState(value);
  const [didEdit, setDidEdit] = useState(
    Object.keys(value).reduce((acc, key) => {
      acc[key] = false;

      return acc;
    }, {}),
  );

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleInputBlur(e) {
    const { name } = e.target;
    setDidEdit((prev) => ({ ...prev, [name]: true }));
  }

  return { formData, didEdit, handleInputBlur, handleInputChange };
}
