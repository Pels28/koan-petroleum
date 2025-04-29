import { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "KOAN Petroleum | Reliable & Sustainable Energy Solutions",
  description: "KOAN Petroleum delivers innovative, sustainable energy solutions nationwide. Committed to environmental responsibility and customer satisfaction, we're shaping Ghana's energy future with cutting-edge technology.",
  keywords: [
    "KOAN Petroleum",
    "energy solutions Ghana",
    "sustainable energy",
    "reliable fuel supply",
    "environmental responsibility",
    "energy innovation",
    "petroleum Ghana",
    "cutting-edge energy technology",
    "customer satisfaction",
    "future of energy"
  ],
  authors: [{ name: "KOAN Petroleum" }],
  creator: "KOAN Petroleum",
};


export default function Home() {
  return (
   <HomeContent/>
  );
}
