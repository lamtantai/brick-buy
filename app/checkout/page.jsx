"use client";

import React, { useEffect, useState } from "react";
import CheckoutForm from "./checkout-form";
import CheckoutOrderSummary from "./checkout-order-summary";
import ErrorPage from "../ui/error-page";
import fetchData from "../utils/fetchData";

export default function CheckoutPage() {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCartData() {
      setLoading(true);
      try {
        const data = await fetchData(
          "https://brick-buys-default-rtdb.firebaseio.com/cart.json",
        );
        setCartData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadCartData();
  }, []);

  function Loading() {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-black border-t-transparent"></div>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage errorMessage={error} />;
  }

  return !cartData.totalQuantity ? (
    <ErrorPage errorMessage="Your cart is empty." />
  ) : (
    <section className="min-h-[calc(100vh-var(--header-height))] lg:grid lg:grid-cols-2">
      <div className="bg-[#333232] lg:order-last lg:p-14">
        <CheckoutOrderSummary cartData={cartData} />
      </div>
      <div className="flex justify-end p-sm lg:p-14">
        <CheckoutForm />
      </div>
    </section>
  );
}
