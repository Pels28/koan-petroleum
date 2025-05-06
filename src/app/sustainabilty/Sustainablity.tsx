"use client";
import Chip from "@/components/Chip";
import { Divider } from "@heroui/react";
import { motion } from "framer-motion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability Commitment | KOAN Petroleum",
  description:
    "KOAN Petroleum is dedicated to reducing environmental impact through lower carbon emissions, energy efficiency, and sustainable waste management. We uphold HSSEQ standards and support community environmental initiatives.",
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
    "community outreach",
  ],
  authors: [{ name: "KOAN Petroleum" }],
  creator: "KOAN Petroleum",
};

const SustainabiltyContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="font-montserrat"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <div className="w-full h-[300px] bg-primary flex items-center justify-center max-md:h-[250px] max-sm:h-[200px]">
        <motion.div
          className="text-center mt-10 pt-10 max-md:mt-5 max-md:pt-5"
          variants={itemVariants}
        >
          <div className="text-[50px] text-white font-montserrat font-bold max-md:text-[40px] max-sm:text-[32px]">
            Sustainability
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        {/* Chip Section */}
        <motion.div
          className="p-10 flex flex-col items-center justify-center gap-5 w-full max-md:p-5 max-sm:p-4"
          variants={itemVariants}
        >
          <Chip>
            <div className="flex flex-row items-center gap-4">
              <span className="rounded-full bg-primary h-2 w-2"></span>
              <span>Sustainability</span>
              <span className="rounded-full bg-primary h-2 w-2"></span>
            </div>
          </Chip>
        </motion.div>

        {/* Commitment Section */}
        <motion.div variants={itemVariants} className="max-md:px-5 max-sm:px-4">
          <motion.p
            className="text-3xl max-md:text-2xl max-sm:text-xl text-center"
            variants={itemVariants}
          >
            Our Commitment to Sustainability
            <span className="text-primary"> (HSSEQ)</span>
          </motion.p>
          <motion.div variants={itemVariants} className="flex justify-center">
            <Divider className="w-10 h-1 bg-primary" />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="px-20 py-6 max-md:px-10 max-sm:px-5"
          variants={itemVariants}
        >
          <motion.p
            variants={itemVariants}
            className="mb-10 max-md:text-sm max-md:mb-6"
          >
            <strong>KOAN Petroleum</strong> is committed to reducing its
            environmental impact by lowering carbon emissions, promoting energy
            efficiency, and implementing sustainable waste management systems.
            We actively engage in community outreach programs to educate and
            support environmental initiatives. Our operations adhere to the
            highest Health, Safety, Security, Environment and Quality (HSSEQ)
            standards to ensure the well-being of our employees, customers and
            the communities we serve.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SustainabiltyContent;
