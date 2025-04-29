"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 20, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.25 }}
    >
      {children}
    </motion.div>
  );
}