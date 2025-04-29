"use client"

import { Link as NextLink } from "@heroui/react";
import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  href: string
}

const Link = ({ children, href }: LinkProps) => {
  return <NextLink href={href}>{children}</NextLink>;
};

export default Link;
