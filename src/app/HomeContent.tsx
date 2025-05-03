"use client";
import Button from "@/components/Button";
import { RiFindReplaceLine } from "react-icons/ri";
import Link from "next/link";
import Chip from "@/components/Chip";
import { FaCheckCircle, FaStore } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiOilLine } from "react-icons/ri";
import { GiMining } from "react-icons/gi";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import ClientReviews from "./ClientReviews";
import HomeContact from "./HomeContact";
import Subscribe from "./Subscribe";
import { motion } from "framer-motion";

const HomeContent = () => {
  return (
    <section>
      <div className="relative w-full h-screen min-h-[520px] bg-homeOverlay bg-center bg-cover bg-no-repeat">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-primary/30"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            {/* Main KOAN text with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[150px] md:text-[180px] text-secondary font-montserrat font-bold leading-none"
            >
              KOAN
            </motion.div>

            {/* Tagline with animation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white text-3xl md:text-4xl font-montserrat font-bold mt-[-10px]"
            >
              Always on your way!
            </motion.p>

            {/* Description with animation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-white/90 tracking-wide leading-8 mt-6 font-montserrat text-lg md:text-xl max-w-3xl mx-auto px-4"
            >
              We are a proudly Ghanaian owned oil & gas company dedicated to
              delivering reliable and sustainable energy solutions nationwide.
              Since our inception, we have built a strong reputation for
              innovation, environmental responsibility and customer
              satisfaction.
            </motion.p>

            {/* Button with animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8"
            >
              <Link href="/about-us">
                <Button
                  startContent={<RiFindReplaceLine className="text-lg" />}
                  className="font-montserrat hover:scale-105 transition-transform"
                  radius="md"
                  variant="solid"
                  size="lg"
                  color="primary"
                >
                  Discover More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full font-montserrat bg-tertiary flex m-0 place-items-stretch place-content-between">
      {/* Left Column */}
      <div className="p-10 flex flex-col gap-5 w-[60%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Chip>
            <div className="flex flex-row items-center gap-4">
              <span className="rounded-full bg-primary h-2 w-2"></span>
              <span>Service List</span>
              <span className="rounded-full bg-primary h-2 w-2"></span>
            </div>
          </Chip>
        </motion.div>

        <motion.p 
          className="mt-2 p-2 text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-primary text-6xl font-poppins font-bold">
            Services&nbsp;
          </span>
          we can help you with!
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          KOAN Petroleum offers a range of services that ensures quality fuel,
          LPG, lubrication, and reliable transport solutions across Ghana{" "}
        </motion.p>

        <div className="space-y-4 mt-6 z-10">
          {[
            "Premium Fuel Stations Nationwide",
            "High-Quality Lubricants & Engine Oils",
            "Industrial & Mining Fuel Solutions",
            "Reliable Transport & Logistics",
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 group"
            >
              <FaCheckCircle className="text-primary h-5 w-5 transition-transform group-hover:scale-125" />
              <span className="text-lg group-hover:text-primary transition-colors">
                {service}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link href="/our-services">
          <Button
            className=""
            color="primary"
            size="lg"
            radius="md"
            variant="ghost"
            startContent={
              <MdMiscellaneousServices className="text-primary w-5 h-5" />
            }
          >
            More Services
          </Button>
          </Link>
        </motion.div>
      </div>

      {/* Right Column - Service Cards */}
      <div className="w-full p-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* KOAN Retail Card */}
          <motion.div
            className="relative h-80 group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute inset-0 flex flex-col p-6">
              <div className="flex flex-col items-center justify-center h-full transition-all duration-500 group-hover:h-1/2 group-hover:-translate-y-4">
                <div className="p-4 bg-primary-100/80 dark:bg-primary-900/20 rounded-xl backdrop-blur-sm border border-primary-200 dark:border-primary-700 mb-4 transition-all group-hover:scale-110">
                  <FaStore className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white transition-all group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  KOAN RETAIL
                </h3>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0 bg-secondary-50/80 dark:bg-secondary-900/20 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:h-1/2 border-t border-secondary-200 dark:border-secondary-700">
                <div className="p-6 opacity-0 translate-y-5 transition-all duration-300 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Our fuel stations provide premium fuel and top-tier
                    customer service across multiple regions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* KOAN Lubricants Card */}
          <motion.div
            className="relative h-80 group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 flex flex-col p-6">
              <div className="flex flex-col items-center justify-center h-full transition-all duration-500 group-hover:h-1/2 group-hover:-translate-y-4">
                <div className="p-4 bg-primary-100/80 dark:bg-primary-900/20 rounded-xl backdrop-blur-sm border border-primary-200 dark:border-primary-700 mb-4 transition-all group-hover:scale-110">
                  <RiOilLine className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white transition-all group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  KOAN LUBRICANTS
                </h3>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0 bg-secondary-50/80 dark:bg-secondary-900/20 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:h-1/2 border-t border-secondary-200 dark:border-secondary-700">
                <div className="p-6 opacity-0 translate-y-5 transition-all duration-300 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    High quality lubricants and engine oils available at all
                    our retail outlets.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* KOAN Mining Card */}
          <motion.div
            className="relative h-80 group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="absolute inset-0 flex flex-col p-6">
              <div className="flex flex-col items-center justify-center h-full transition-all duration-500 group-hover:h-1/2 group-hover:-translate-y-4">
                <div className="p-4 bg-primary-100/80 dark:bg-primary-900/20 rounded-xl backdrop-blur-sm border border-primary-200 dark:border-primary-700 mb-4 transition-all group-hover:scale-110">
                  <GiMining className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white transition-all group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  KOAN MINING
                </h3>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0 bg-secondary-50/80 dark:bg-secondary-900/20 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:h-1/2 border-t border-secondary-200 dark:border-secondary-700">
                <div className="p-6 opacity-0 translate-y-5 transition-all duration-300 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Quality petroleum products for mining companies and
                    institutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Transport & Logistics Card */}
          <motion.div
            className="relative h-80 group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="absolute inset-0 flex flex-col p-6">
              <div className="flex flex-col items-center justify-center h-full transition-all duration-500 group-hover:h-1/2 group-hover:-translate-y-4">
                <div className="p-4 bg-primary-100/80 dark:bg-primary-900/20 rounded-xl backdrop-blur-sm border border-primary-200 dark:border-primary-700 mb-4 transition-all group-hover:scale-110">
                  <MdOutlineEmojiTransportation className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white transition-all group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  TRANSPORT & LOGISTICS
                </h3>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0 bg-secondary-50/80 dark:bg-secondary-900/20 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:h-1/2 border-t border-secondary-200 dark:border-secondary-700">
                <div className="p-6 opacity-0 translate-y-5 transition-all duration-300 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Reliable fuel distribution and logistics services
                    nationwide.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
      <ClientReviews />
      <div className="h-[100px] bg-gradient-to-l  from-primary via-secondary to-tertiary"></div>
      <div className="bg-station h-[500px] bg-center bg-cover bg-no-repeat "></div>
      <HomeContact />
      <Subscribe />
    </section>
  );
};

export default HomeContent;
