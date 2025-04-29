import { Metadata } from "next";
import AboutUsContent from "./AboutUsContent";


export const metadata: Metadata = {
  title: "About KOAN Petroleum | Our Story, Mission & Values",
  description: "Discover KOAN Petroleum's journey, mission, and commitment to delivering quality energy solutions. Learn about our values and vision for the future.",
  keywords: [
    "KOAN Petroleum",
    "About KOAN",
    "Petroleum company",
    "Energy solutions",
    "Oil and gas",
    "Fuel services",
    "Company history"
  ],
  authors: [{ name: "KOAN Petroleum" }],
  creator: "KOAN Petroleum",

};



const AboutUs = () => {
  return (
   <AboutUsContent/>
  );
};

export default AboutUs;
