import localFont from "next/font/local";

import "./global.css";

import Header from "./components/header";
import Menu from "./components/menu";

import StoreProvider from "./store-provider";
import CartCheckoutMenu from "./components/cart/cart-checkout-menu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "BRICK BUY | BUY THE LEGO YOU WANT",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <CartCheckoutMenu />
          <Menu />
          <Header />
          <main className="">{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
