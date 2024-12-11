"use client";

import React, { useState } from "react";

import InputField from "./input-filed";
import InputErrorMessage from "./input-error-message";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const newErrors = {};

    if (!formData.firstName.trim().length < 2) {
      newErrors.firstName = "This field must have a length no shorter than 2.";
    }

    setErrors(newErrors);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", address: "", phone: "" });
    }
  }

  return (
    <div className="w-full lg:max-w-[36rem]">
      <h3 className="mb-6 text-3xl font-semibold capitalize">
        Shipping Details
      </h3>
      <form className="space-y-sm" onSubmit={handleSubmit}>
        <div className="">
          <InputField
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First name*"
            onChange={handleChange}
            isValid
          />
          <InputErrorMessage errorMessage={errors.firstName} />
        </div>

        <InputField
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Last name*"
          onChange={handleChange}
          isValid
        />

        <InputField
          type="text"
          name="address"
          value={formData.address}
          placeholder="Address*"
          onChange={handleChange}
          isValid
        />

        <InputField
          type="tel"
          pattern="[0-9]{10}"
          name="phone"
          value={formData.phone}
          placeholder="Phone*"
          onChange={handleChange}
          isValid
        />

        <InputField
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email*"
          onChange={handleChange}
          isValid
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="btn-custom-shape btn-size-md !bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
