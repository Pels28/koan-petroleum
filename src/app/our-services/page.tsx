import { Metadata } from "next";
import ServicesContent from "./ServicesContent";
export const metadata: Metadata = {
  title: "Our Services | KOAN Petroleum - Quality Fuel & Energy Solutions",
  description:
    "KOAN Petroleum offers premium fuel, LPG, lubricants, and transport solutions across Ghana. Discover our retail stations, mining supplies, and convenient amenities.",
  keywords: [
    "KOAN Petroleum services",
    "Fuel stations in Ghana",
    "Premium lubricants",
    "Mining petroleum supplies",
    "Fuel transport logistics",
    "K-Mart convenience stores",
    "Tyre services Ghana",
  ],
  authors: [{ name: "KOAN Petroleum" }],
  creator: "KOAN Petroleum",
};

export default function Services() {
  return <ServicesContent />;
}
