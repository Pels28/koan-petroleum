import type { Metadata } from "next";
import { Lato, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Menu from "@/components/NavBar";
import Footer from "@/components/Footer";
// import Link from "next/link";
import { Divider  } from "@heroui/react";
import FuelPricesBoard from "./FuelPricesBoard";

import KoanChatbot from "@/components/Chatbot";
import Link from "next/link";
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
      <body
        className={` ${poppins.variable} ${montserrat.variable} ${lato.variable} antialiased  min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Provider>
          <div className="w-full bg-primary-50 h-14 pr-16 text-white flex items-center justify-end">
            <div className="flex gap-5 mr-5">
              <Link className="text-primary" href="/station-locator">Station Locator</Link>
              <Divider
                orientation="vertical"
                className="bg-black h-5 w-[1.5px]"
              />
            </div>
            <div className="flex gap-3 mr-5">
              <Link className="text-primary" href="/sustainabilty">Sustianablilty</Link>
              <Divider
                orientation="vertical"
                className="bg-black h-5 w-[1.5px]"
              />
            </div>
            <div className="">
              {/* <Link href="/station-locator">Fuel Prices Board</Link> */}
            <FuelPricesBoard/>
            
            </div>
          </div>
          <Menu />

          <main className="flex-grow w-full relative overflow-hidden">
            {children}
            <KoanChatbot /> {/* Add chatbot here */}
          </main>

  
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
