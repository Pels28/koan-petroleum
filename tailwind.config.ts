import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
     background: "#ffffff", 
        foreground: "#171717",
        // primary: {
        //   DEFAULT: "#4A00C3",
        // },
        secondary: {
          DEFAULT: "#00F4EF",
        },
        tertiary: {
          DEFAULT: "#F8F8F8",
          deep: "#171717",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],
        lato: ["var(--font-lato)"],
      },
      backgroundImage: {
        homeOverlay:
          "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/koan-sunny.jpg')",
        endlessPatternOverlay:
        "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/svg/endless-constellation.svg')",
        patternOverlay:
          "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/svg/pattern-randomized.svg')",
        station: "url('/images/koan-station.jpg')",
        aboutOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/koan-about.jpg')",
        servicesOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/koan-services.jpg')",
        contactOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/koan-contact.jpg')",
        blackOverlay: "url('/images/black-overlay.jpg')",
        newsOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/new-image.jpg')",
        careersOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/time-bg.jpg')",
        managementOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/manage-bg.png')",
      },
    },
  },
  plugins: [heroui()],
  
};
