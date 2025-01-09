import "./globals.css";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import { cs } from "../utils";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Provider from "../Provider/Provider";
import { Client, HydrationProvider, Server } from "react-hydration-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  title: "Blog Title",
  description: "Blog page description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cs(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark text-dark dark:text-light"
        )}
      >
        <HydrationProvider>
          <Provider>
            <Header />
            <Client>{children}</Client>
            <Footer />
          </Provider>
        </HydrationProvider>
      </body>
    </html>
  );
}
