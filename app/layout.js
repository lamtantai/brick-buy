import localFont from "next/font/local";

import "./global.css";

import Header from "./components/header";

import StoreProvider from "./store-provider";
import MenuContainer from "./components/menu/menu-container";

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
  title: "BRICK BUY",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <MenuContainer />
          <Header />
          <main className="">{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
