"use client";

import React, { useState } from "react";

import InputField from "./input-field";
import { useDispatch } from "react-redux";
import { clearCartItems } from "../lib/features/cart-slice";
import { openModal } from "../lib/features/modal-slice";
import Modal from "../ui/modal";

const defaultFormData = {
  firstName: "",
  lastName: "",
  address: "",
  phone: "",
  email: "",
};

const defaultDidEdit = Object.keys(defaultFormData).reduce((acc, key) => {
  acc[key] = false;
  return acc;
}, {});

export default function CheckoutForm() {
  const [formData, setFormData] = useState(defaultFormData);
  const [didEdit, setDidEdit] = useState(defaultFormData);

  const dispatch = useDispatch();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleInputBlur(e) {
    const { name } = e.target;
    setDidEdit((prev) => ({ ...prev, [name]: true }));
  }

  const isFirstNameInvalid =
    didEdit.firstName && formData.firstName.trim().length < 2;

  const isLastNameInvalid =
    didEdit.lastName && formData.lastName.trim().length < 2;

  const isPhoneInvalid = didEdit.phone && !formData.phone.trim();

  const isAddressInvalid = didEdit.address && !formData.address.trim();

  const isEmailInvalid =
    didEdit.email &&
    (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email));

  const isFormInvalid =
    isFirstNameInvalid ||
    isLastNameInvalid ||
    isPhoneInvalid ||
    isAddressInvalid ||
    isEmailInvalid;

  function handleSubmit(e) {
    e.preventDefault();

    if (isFormInvalid) return;

    dispatch(clearCartItems());
    dispatch(openModal());
  }

  return (
    <div className="w-full lg:max-w-[36rem]">
      <h3 className="mb-6 text-3xl font-semibold capitalize">
        Shipping Details
      </h3>
      <form className="space-y-sm" onSubmit={handleSubmit}>
        <InputField
          onBlur={handleInputBlur}
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="First name*"
          onChange={handleInputChange}
          isInvalid={isFirstNameInvalid}
          errorMessage="This field must have a length no shorter than 2."
        />

        <InputField
          onBlur={handleInputBlur}
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Last name*"
          onChange={handleInputChange}
          isInvalid={isLastNameInvalid}
          errorMessage="This field must have a length no shorter than 2."
        />

        <InputField
          onBlur={handleInputBlur}
          type="text"
          name="address"
          value={formData.address}
          placeholder="Address*"
          onChange={handleInputChange}
          isInvalid={isAddressInvalid}
          errorMessage="Please enter shipping address."
        />

        <InputField
          onBlur={handleInputBlur}
          type="tel"
          name="phone"
          value={formData.phone}
          placeholder="Phone*"
          onChange={handleInputChange}
          isInvalid={isPhoneInvalid}
          errorMessage="Please enter your phone number."
        />

        <InputField
          onBlur={handleInputBlur}
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email*"
          onChange={handleInputChange}
          isInvalid={isEmailInvalid}
          errorMessage="Please enter a valid email."
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className={`btn-custom-shape btn-size-md !bg-green-600 ${isFormInvalid && "cursor-not-allowed"}`}
            disabled={isFormInvalid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
