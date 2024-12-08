"use client";

import React, { useState } from "react";
import AccordionItem from "../components/accordion-item";
import { useSelector } from "react-redux";
import CartItem from "../components/cart/cart-item";
import CheckoutProductItem from "./checkout-product-item";

const CheckoutForm = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart,
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.phone.trim() || !/^\d{10,}$/.test(formData.phone))
      newErrors.phone = "Valid phone number is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", address: "", phone: "" });
    }
  };

  return (
    <div className="grid lg:grid-cols-2">
      <div className="p-sm">
        <AccordionItem
          name="order summary"
          className="text-lg font-semibold text-blue-700"
        >
          <ul className="divide-y">
            {cartItems.map((item) => (
              <li key={item.id}>
                <CheckoutProductItem product={item} />
              </li>
            ))}
          </ul>
        </AccordionItem>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>

        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
