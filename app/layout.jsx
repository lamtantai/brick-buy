import localFont from "next/font/local";

import "./global.css";

import StoreProvider from "./store-provider";
import MenuContainer from "./components/menu-container";
import Wrapper from "./components/wrapper";

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
          <Wrapper>
            <MenuContainer />
            <main className="">{children}</main>
          </Wrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
