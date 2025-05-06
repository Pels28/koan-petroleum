import type { Metadata } from "next";
import { Lato, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Menu from "@/components/NavBar";
import Footer from "@/components/Footer";
// import Link from "next/link";
import { Divider } from "@heroui/react";
import FuelPricesBoard from "./FuelPricesBoard";

import Link from "next/link";
import Script from "next/script";
// import Link from "next/link";

export const poppins = Poppins({
  weight: ["100", "200", "300", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

export const montserrat = Montserrat({
  weight: ["100", "200", "300", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
});

export const lato = Lato({
  weight: ["100", "300", "400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  preload: true,
});

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: [],
  authors: [],
  creator: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen overflow-x-hidden">
      <Script
        id="tawk-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/6812449e5d29791919edeabb/1iq3lo44u';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `,
        }}
      />
      <body
        className={` ${poppins.variable} ${montserrat.variable} ${lato.variable} antialiased  min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Provider>
          <div className="w-full bg-primary-50 h-14 pr-4 md:pr-16 text-white flex items-center justify-end">
            <div className="flex gap-3 md:gap-5 mr-3 md:mr-5">
              <Link
                className="text-primary text-sm md:text-base"
                href="/station-locator"
              >
                Station Locator
              </Link>
              <Divider
                orientation="vertical"
                className="bg-black h-5 w-[1.5px] block"
              />
            </div>
            <div className="flex gap-3 md:gap-5 mr-3 md:mr-5">
              <Link
                className="text-primary text-sm md:text-base"
                href="/sustainabilty"
              >
                Sustianablilty
              </Link>
              <Divider
                orientation="vertical"
                className="bg-black h-5 w-[1.5px] block"
              />
            </div>
            <div className="text-sm md:text-base">
              <FuelPricesBoard />
            </div>
          </div>
          <Menu />

          <main className="flex-grow w-full relative overflow-hidden">
            {children}
            {/* <KoanChatbot /> Add chatbot here */}
          </main>

          <Footer />
        </Provider>
      </body>
    </html>
  );
}
