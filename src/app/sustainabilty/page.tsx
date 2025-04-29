
import { Metadata } from "next";
import SustainabiltyContent from "./Sustainablity";


export const metadata: Metadata = {
  title: "Sustainability Commitment | KOAN Petroleum",
  description: "KOAN Petroleum is dedicated to reducing environmental impact through lower carbon emissions, energy efficiency, and sustainable waste management. We uphold HSSEQ standards and support community environmental initiatives.",
  keywords: [
    "sustainability",
    "carbon emissions reduction",
    "energy efficiency",
    "sustainable waste management",
    "HSSEQ standards",
    "environmental initiatives",
    "KOAN Petroleum sustainability",
    "corporate responsibility",
    "green energy",
    "community outreach"
  ],
  authors: [{ name: "KOAN Petroleum" }],
  creator: "KOAN Petroleum",
};

const Sustainabilty = () => {




  return (
   <SustainabiltyContent/>
  );
};

export default Sustainabilty;
