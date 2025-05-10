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
      <div className="relative w-full h-[520px] bg-homeOverlay bg-center bg-cover bg-no-repeat">
        {/* Gradient overlay */}
        <div className="relative w-full h-[520px] bg-homeOverlay bg-center bg-cover bg-no-repeat">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-primary/30"></div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
            <div className="text-center max-w-4xl w-full mx-auto">
              {/* Main KOAN text with animation - Adjusted responsive sizes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[80px] xs:text-[100px] sm:text-[120px] md:text-[150px] lg:text-[180px] xl:text-[200px] text-secondary font-montserrat font-bold leading-none"
              >
                KOAN
              </motion.div>

              {/* Tagline with animation - Enhanced responsive sizing */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-montserrat font-bold mt-[-10px] sm:mt-[-15px] md:mt-[-20px] lg:mt-[-25px]"
              >
                Always on your way!
              </motion.p>

              {/* Description with animation - Improved line heights */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-white/90 tracking-wide leading-6 sm:leading-7 md:leading-8 lg:leading-9 mt-4 sm:mt-6 md:mt-8 font-montserrat text-base sm:text-lg md:text-xl lg:text-[1.25rem] max-w-3xl mx-auto px-2 sm:px-4"
              >
                We are a proudly Ghanaian owned oil & gas company dedicated to
                delivering reliable and sustainable energy solutions nationwide.
                Since our inception, we have built a strong reputation for
                innovation, environmental responsibility and customer
                satisfaction.
              </motion.p>

              {/* Button with animation - Better responsive margins */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="mt-6 sm:mt-8 md:mt-10 lg:mt-12"
              >
                <Link href="/about-us">
                  <Button
                    startContent={<RiFindReplaceLine className="text-lg" />}
                    className="font-montserrat hover:scale-105 transition-transform text-sm sm:text-base md:text-lg"
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
      </div>

      <div className="w-full font-montserrat bg-tertiary flex flex-col lg:flex-row m-0 place-items-stretch place-content-between">
        {/* Left Column */}
        <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-3 sm:gap-4 md:gap-5 w-full lg:w-[73%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Chip>
              <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4">
                <span className="rounded-full bg-primary h-2 w-2"></span>
                <span className="text-sm sm:text-base">Service List</span>
                <span className="rounded-full bg-primary h-2 w-2"></span>
              </div>
            </Chip>
          </motion.div>

          <motion.p
            className="mt-1 sm:mt-2 p-1 sm:p-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold">
              Services&nbsp;
            </span>
            we can help you with!
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg"
          >
            KOAN Petroleum offers a range of services that ensures quality fuel,
            LPG, variety range of lubricants or lubricating oils, and reliable transport solutions across Ghana
          </motion.p>

          <div className="space-y-2 sm:space-y-3 md:space-y-4 mt-3 sm:mt-4 md:mt-6 z-10 w">
            {[
              "Premium Fuel Stations Nationwide",
              "High-Quality Lubricants & Engine Oils",
              "Industrial , Agricultural & Mining Fuel Solutions",
              "Reliable Transport & Logistics",
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-2 sm:gap-3 group"
              >
                <FaCheckCircle className="text-primary h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-125" />
                <span className="text-sm sm:text-base md:text-lg group-hover:text-primary transition-colors">
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
            className="mt-4 sm:mt-6"
          >
            <Link href="/our-services">
              <Button
                className=""
                color="primary"
                size="lg"
                radius="md"
                variant="ghost"
                startContent={
                  <MdMiscellaneousServices className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
                }
              >
                More Services
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Column - Service Cards */}
        <div className="w-full p-4 sm:p-6 md:p-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* KOAN Retail Card */}
            <motion.div
              className="relative h-64 sm:h-72 md:h-80 group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute inset-0 flex flex-col p-4 sm:p-5 md:p-6">
                <div className="flex flex-col items-center justify-center h-full transition-all duration-500 group-hover:h-1/2 group-hover:-translate-y-4">
                  <div className="p-3 sm:p-4 bg-primary-100/80 dark:bg-primary-900/20 rounded-xl backdrop-blur-sm border border-primary-200 dark:border-primary-700 mb-3 sm:mb-4 transition-all group-hover:scale-110">
                    <FaStore className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 dark:text-white transition-all group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    KOAN RETAIL
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0 bg-secondary-50/80 dark:bg-secondary-900/20 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:h-1/2 border-t border-secondary-200 dark:border-secondary-700">
                  <div className="p-4 sm:p-5 md:p-6 opacity-0 translate-y-5 transition-all duration-300 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      Our fuel stations provide premium fuel and top-tier
                      customer service across multiple regions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* KOAN Lubricants Card */}
            <motion.div
              className="relative h-64 sm:h-72 md:h-80 group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute inset-0 flex flex-col p-4 sm:p-5 md:p-6">
                <div className="flex flex-col items-center justify-center h-full transition-all duration-500 group-hover:h-1/2 group-hover:-translate-y-4">
                  <div className="p-3 sm:p-4 bg-primary-100/80 dark:bg-primary-900/20 rounded-xl backdrop-blur-sm border border-primary-200 dark:border-primary-700 mb-3 sm:mb-4 transition-all group-hover:scale-110">
                    <RiOilLine className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 dark:text-white transition-all group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    KOAN LUBRICANTS
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0 bg-secondary-50/80 dark:bg-secondary-900/20 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:h-1/2 border-t border-secondary-200 dark:border-secondary-700">
                  <div className="p-4 sm:p-5 md:p-6 opacity-0 translate-y-5 transition-all duration-300 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      High quality lubricants and engine oils available at all
                      our retail outlets.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* KOAN Mining Card */}
            <motion.div
              className="relative h-64 sm:h-72 md:h-80 group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="absolute inset-0 flex flex-col p-4 sm:p-5 md:p-6">
                <div className="flex flex-col items-center justify-center h-full transition-all duration-500 group-hover:h-1/2 group-hover:-translate-y-4">
                  <div className="p-3 sm:p-4 bg-primary-100/80 dark:bg-primary-900/20 rounded-xl backdrop-blur-sm border border-primary-200 dark:border-primary-700 mb-3 sm:mb-4 transition-all group-hover:scale-110">
                    <GiMining className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 dark:text-white transition-all group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    KOAN MINING
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0 bg-secondary-50/80 dark:bg-secondary-900/20 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:h-1/2 border-t border-secondary-200 dark:border-secondary-700">
                  <div className="p-4 sm:p-5 md:p-6 opacity-0 translate-y-5 transition-all duration-300 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      Quality petroleum products for mining companies and
                      institutions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Transport & Logistics Card */}
            <motion.div
              className="relative h-64 sm:h-72 md:h-80 group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="absolute inset-0 flex flex-col p-4 sm:p-5 md:p-6">
                <div className="flex flex-col items-center justify-center h-full transition-all duration-500 group-hover:h-1/2 group-hover:-translate-y-4">
                  <div className="p-3 sm:p-4 bg-primary-100/80 dark:bg-primary-900/20 rounded-xl backdrop-blur-sm border border-primary-200 dark:border-primary-700 mb-3 sm:mb-4 transition-all group-hover:scale-110">
                    <MdOutlineEmojiTransportation className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 dark:text-white transition-all group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    TRANSPORT & LOGISTICS
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0 bg-secondary-50/80 dark:bg-secondary-900/20 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:h-1/2 border-t border-secondary-200 dark:border-secondary-700">
                  <div className="p-4 sm:p-5 md:p-6 opacity-0 translate-y-5 transition-all duration-300 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
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
      {/* <GoogleReviews/> */}
    </section>
  );
};

export default HomeContent;
