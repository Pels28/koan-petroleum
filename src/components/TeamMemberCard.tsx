"use client"

import { Image } from '@heroui/react';
import { motion } from 'framer-motion';
import React from 'react';

type TeamMemberProps = {
  name: string;
  position: string;
  image?: string;
};

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, position, }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-[#1f1f1f] rounded-2xl shadow-lg overflow-hidden transition-all duration-300  w-full group"
    >
      <div className="relative overflow-hidden">
        <Image
          src={""}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">{position}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
