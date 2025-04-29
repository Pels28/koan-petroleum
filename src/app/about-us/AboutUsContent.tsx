"use client"
import Chip from "@/components/Chip";
import { Divider } from "@heroui/react";
import { RiUserStarFill } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsGraphUpArrow } from "react-icons/bs";
import Leadership from "../Leadership";
import { motion } from "framer-motion";


const AboutUsContent = () => {
    return  <section>
    <div className="relative w-full h-[450px] bg-aboutOverlay bg-center bg-cover bg-no-repeat flex items-center justify-center">
      <div className="text-center mt-10 pt-10">
        <div className="text-[100px] text-white font-montserrat font-bold">
          About Us
        </div>
      </div>
    </div>

    <div className=" font-montserrat">
      <div className="p-10 flex flex-col gap-5 w-[60%]">
        <Chip>
          <div className="flex flex-row items-center gap-4">
            <span className="rounded-full bg-primary h-2 w-2"></span>
            <span>About Us</span>
            <span className="rounded-full bg-primary h-2 w-2"></span>
          </div>
        </Chip>
      </div>

      <motion.div 
      className="grid grid-cols-2 gap-4 px-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Mission Column */}
      <motion.div 
        className="space-y-4"
        initial={{ x: -20 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="space-y-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <i className="font-light">Our Mission</i>
          <Divider className="w-7 h-1 bg-primary" />
        </motion.div>

        <motion.div 
          className="w-full h-full flex flex-row space-x-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="">
            KOAN Petroleum is committed to delivering exceptional energy
            solutions that prioritize sustainability and environmental
            safety. By embracing innovation and providing excellent
            services, we aim to empower communities, protect the planet and
            fuel progress for a better future.
          </p>
          <Divider
            orientation="vertical"
            className="h-[50%] bg-primary"
          />
        </motion.div>
      </motion.div>

      {/* Vision Column */}
      <motion.div 
        className="space-y-4 ml-8"
        initial={{ x: 20 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="space-y-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <i className="font-light">Vision Statement</i>
          <Divider className="w-7 h-1 bg-primary" />
        </motion.div>

        <motion.p 
          className=""
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          To become a leading energy provider, driving sustainable growth
          through innovative solutions, environmental safety and
          unparalleled excellence in service delivery.
        </motion.p>
      </motion.div>
    </motion.div>

      <div className="p-10 space-y-8">
        <div>
          <p className="text-5xl">
            Our <span className="text-primary">Core</span> Values
          </p>
          <Divider className="w-10 h-1 bg-primary" />
        </div>

        <div className="grid grid-cols-2 gap-10">
      {/* Customer Satisfaction - Slides from left */}
      <motion.div
        className="flex flex-row items-center gap-4 justify-center bg-white rounded-2xl drop-shadow-lg p-2"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <RiUserStarFill className="text-primary h-10 w-10" />
        </div>
        <div className="space-y-2">
          <strong>Customer Satisfaction</strong>
          <br />
          <p className="text-sm font-light">
            we strive to exceed expectations by understanding and
            addressing the unique needs of our customers.
          </p>
        </div>
      </motion.div>

      {/* Environmental Responsibility - Slides from right */}
      <motion.div
        className="flex flex-row items-center gap-4 justify-center bg-white rounded-2xl drop-shadow-lg p-2"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div>
          <AiOutlineSafety className="text-primary h-10 w-10" />
        </div>
        <div className="space-y-2">
          <strong>Environmental Responsibility</strong>
          <br />
          <p className="text-sm font-light">
            sustainability is at the heart of our operations, ensuring we
            uphold safety and environmental standards.
          </p>
        </div>
      </motion.div>

      {/* Innovation - Slides from left */}
      <motion.div
        className="flex flex-row items-center gap-4 justify-center bg-white rounded-2xl drop-shadow-lg p-2"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div>
          <HiOutlineLightBulb className="text-primary h-10 w-10" />
        </div>
        <div className="space-y-2">
          <strong>Innovation</strong>
          <br />
          <p className="text-sm font-light">
            we embrace new ideas and technology to drive continuous growth
            and improvement.
          </p>
        </div>
      </motion.div>

      {/* Operational Excellence - Slides from right */}
      <motion.div
        className="flex flex-row items-center gap-4 justify-center bg-white rounded-2xl drop-shadow-lg p-2"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div>
          <BsGraphUpArrow className="text-primary h-10 w-10" />
        </div>
        <div className="space-y-2">
          <strong>Operational Excellence</strong>
          <br />
          <p className="text-sm font-light">
            our commitment to efficiency and quality ensures we deliver
            world-class energy solutions.
          </p>
        </div>
      </motion.div>
    </div>
      </div>
    </div>
    <Leadership/>
  </section>
}


export default AboutUsContent;