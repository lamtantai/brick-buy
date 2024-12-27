import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer";

export default function CollectionsLayout({ children }) {
  return (
    <>
      <Header />
      <div
        className="h-full min-h-[calc(100vh-var(--header-height))] w-full bg-cover"
        style={{
          backgroundImage:
            "url(https://cdn.sanity.io/images/dsfx7636/consumer_products/63d45bd66cd9a321f771feb465eb72cafdc776d4-2176x1912.webp)",
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
