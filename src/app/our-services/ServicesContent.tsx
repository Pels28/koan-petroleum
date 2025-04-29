"use client";
import Chip from "@/components/Chip";
import { Divider, Image } from "@heroui/react";
import ServicesCarousel from "./ServicesCarousel";
import { motion } from "framer-motion";



const ServicesContent = () => {
  const amenities = [
    {
      title: "Convenient Payment Options",
      description:
        "We accept VISA, Mastercard, Mobile Money, Telecel Cash, and POS for a hassle-free experience.",
      image: "/images/koan-payment.jpg",
      reverse: false,
    },
    {
      title: "K-Mart",
      description:
        "Your one-stop shop for groceries, snacks and essentials. Enjoy convenient shopping at our stations.",
      image: "/images/koan-kmart.jpg",
      reverse: true,
    },
    {
      title: "Tyre Services & Lube Bay",
      description:
        "Professional tyre servicing and oil changes to keep your vehicle in peak condition.",
      image: "/images/koan-oil.jpg",
      reverse: false,
    },
  ];

  return (
    <section className="font-montserrat">
      <div className="w-full h-[450px] bg-servicesOverlay bg-center bg-cover bg-no-repeat flex items-center justify-center">
        <div className="text-center mt-10 pt-10">
          <div className="text-[100px] text-white font-montserrat font-bold">
            Our Services
          </div>
        </div>
      </div>

      <div className="p-10 flex flex-col gap-5 w-[60%]">
        <Chip>
          <div className="flex flex-row items-center gap-4">
            <span className="rounded-full bg-primary h-2 w-2"></span>
            <span>Our Services</span>
            <span className="rounded-full bg-primary h-2 w-2"></span>
          </div>
        </Chip>
      </div>

      <div className="px-10 pb-4">
        <p className="text-5xl">
          Our <span className="text-primary">Services</span> And{" "}
          <span className="text-primary">Amenities</span>
        </p>
        <Divider className="w-10 h-1 bg-primary" />
      </div>

      {amenities.map((item, index) => {
        const isFirst = index === 0;
        const bgColor = isFirst ? "bg-primary" : "bg-white";
        const titleColor = isFirst ? "text-white" : "text-primary";
        const descriptionColor = isFirst ? "text-white" : "text-black"; // <-- dynamic now!

        return (
          <div
            key={index}
            className={`flex w-full flex-col md:flex-row mb-3 ${
              item.reverse ? "md:flex-row-reverse" : ""
            } items-center ${bgColor}`}
          >
            <Image
              isZoomed
              radius="none"
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-none shadow-xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full flex flex-col items-center justify-between p-5"
            >
              <h3 className={`text-4xl font-bold ${titleColor}`}>
                {item.title}
              </h3>
              <p className={`mt-6 text-lg leading-relaxed ${descriptionColor}`}>
                {item.description}
              </p>
            </motion.div>
          </div>
        );
      })}

      <div className="bg-gradient-to-r h-[150px]  from-primary via-secondary to-tertiary"></div>

      <div className="p-10">
        <p className="text-5xl">
          What We <span className="text-primary">Do!</span>
        </p>
        <Divider className="w-10 h-1 bg-primary" />
      </div>

      <ServicesCarousel />
    </section>
  );
};

export default ServicesContent;
