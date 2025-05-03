import { Metadata } from "next";
import CareersContent from "./CareersContent"

export const metadata: Metadata = {
    title: "Careers at Koan Petroleum | Join Our Team",
    description:
      "Explore career opportunities at Koan Petroleum. Join Ghana's leading energy company with competitive benefits and growth opportunities.",
    keywords: [
      "KOAN Petroleum contact",
      "Petroleum company contact",
      "Fuel services contact",
      "Oil and gas inquiries",
      "KOAN customer service",
      "Energy solutions contact",
    ],
    authors: [{ name: "KOAN Petroleum" }],
    creator: "KOAN Petroleum",
  };


const Careers = () => {
    return <CareersContent/>
}

export default Careers