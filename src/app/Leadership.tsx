"use client";
import { motion } from "framer-motion";
import Chip from "@/components/Chip";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Divider } from "@heroui/react";
import Link from "next/link";
import { slugify } from "@/utils";

const Leadership = () => {
  return (
    <div className="font-montserrat p-10 bg-tertiary space-y-10">
      {/* Chip Section */}
      <motion.div 
        className="flex flex-col gap-5 w-[60%]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Chip>
          <div className="flex flex-row items-center gap-4">
            <span className="rounded-full bg-primary h-2 w-2"></span>
            <span>The Leadership</span>
            <span className="rounded-full bg-primary h-2 w-2"></span>
          </div>
        </Chip>
      </motion.div>

      {/* Board of Directors Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="space-y-1">
          <i className="font-light">
            Introducing the<span className="font-bold"> Board of Directors</span>
          </i>
          <Divider className="w-full h-[1px] bg-primary" />
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {[
          {
            image: "https://heroui.com/images/hero-card-complete.jpeg",
            name: "Kofi Antwi",
            position: "Board Chairman",
            slug: "kofi-antwi"
          },
          {
            image: "https://heroui.com/images/hero-card-complete.jpeg",
            name: "Alice Quaicoe",
            position: "Member",
            slug: "alice-quaicoe"
          },
          {
            image: "https://heroui.com/images/hero-card-complete.jpeg",
            name: "Michael Yeboah Antwi",
            position: "Member",
            slug: "michael-yeboah-antwi"
          },
        ].map((member, index) => (
          <Link href={`about-us/board-of-directors/${member.slug}`}   key={index}>
          <motion.div
           
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            className="cursor-pointer"

          >
            <TeamMemberCard
              image={member.image}
              name={member.name}
              position={member.position}
            />
          </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Management Team Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="space-y-1">
          <i className="font-light">
            Introducing the<span className="font-bold"> Management Team</span>
          </i>
          <Divider className="w-full h-[1px] bg-primary" />
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-3 gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {[
      
          {
            image: "https://heroui.com/images/hero-card-complete.jpeg",
            name: "Michael Yeboah Antwi",
            position: "Managing Director",
            
          },
          {
            image: "https://heroui.com/images/hero-card-complete.jpeg",
            name: "Emmanuel Osei Assibey",
            position: "Financial Controller & Internal Auditor",
          },
          {
            image: "https://heroui.com/images/hero-card-complete.jpeg",
            name: "Christopher Asare-Boriba",
            position: "Operations Manager",
          },
          {
            image: "https://heroui.com/images/hero-card-complete.jpeg",
            name: "Daniel Sedoh",
            position: "Managing Distribution & Marketing Manager",
          },
          {
            image: "https://heroui.com/images/hero-card-complete.jpeg",
            name: "Frederick Adjei",
            position: "Accounts & Administrative Manager",
          },
        ].map((member, index) => (
          <Link href={`about-us/management-team/${slugify(member.name)}`}   key={index}>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          >
            <TeamMemberCard
              image={member.image}
              name={member.name}
              position={member.position}
            />
          </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Leadership;