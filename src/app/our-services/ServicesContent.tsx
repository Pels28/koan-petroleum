"use client";
import Chip from "@/components/Chip";
import {Image } from "@heroui/react";
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
      <div className="w-full h-[450px] bg-servicesOverlay bg-center bg-cover bg-no-repeat flex items-center justify-center max-md:h-[350px] max-sm:h-[300px]">
        <div className="flex flex-col items-center justify-center text-center mt-10 pt-10 max-md:mt-5 max-md:pt-5">
          <div className="text-[100px] text-white font-montserrat font-bold max-md:text-[70px] max-sm:text-[50px]">
            Our Services
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "158px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 w-7 rounded-xl bg-white max-md:w-[100px] max-sm:w-[80px]"
          />
        </div>
      </div>

      <div className="p-10 flex flex-col gap-5 w-[60%] max-md:w-[80%] max-sm:w-full max-sm:p-5">
        <Chip>
          <div className="flex flex-row items-center gap-4">
            <span className="rounded-full bg-primary h-2 w-2"></span>
            <span>Our Services</span>
            <span className="rounded-full bg-primary h-2 w-2"></span>
          </div>
        </Chip>
      </div>

      <div className="px-10 pb-4 max-md:px-5">
        <p className="text-5xl max-md:text-3xl max-sm:text-2xl">
          Our <span className="text-primary">Services</span> And&nbsp;
          <span className="text-primary">Amenities</span>
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-1 w-7 mt-2 rounded-xl bg-primary"
        />
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

      <div className="p-10 max-md:p-5">
        <p className="text-5xl max-md:text-3xl max-sm:text-2xl">
          What We <span className="text-primary">Do!</span>
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-1 w-7 mt-2 rounded-xl bg-primary"
        />
      </div>

      <ServicesCarousel />
    </section>
  );
};

export default ServicesContent;
