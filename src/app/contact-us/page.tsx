import { Metadata } from "next/types";
import ContactUsContent from "./ContactUsContent";

export const metadata: Metadata = {
  title: "Contact KOAN Petroleum | Get in Touch Today",
  description:
    "Reach out to KOAN Petroleum for inquiries or more information. Call us at 0308235277 or email info@koanpetroleum.com",
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
const ContactUs = () => {
  return <ContactUsContent />;
};

export default ContactUs;
