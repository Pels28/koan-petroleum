"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import KoanLogo from "@public/images/koan.jpg";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/our-services" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
];

export default function Menu() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      position="sticky"
      shouldHideOnScroll={false}
      isBlurred
      isBordered
      className="font-montserrat w-full"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-3",
          "data-[active=true]:after:left-8",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[3px]",
          "data-[active=true]:after:rounded-[15px]",
          "data-[active=true]:after:bg-primary",
        ],
        base: " w-full m-0 p-0 flex items-start justify-start gap-10 ",
      }}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      {/* Left side - Brand Logo */}
      <NavbarBrand className="mr-10">
        <div className="relative w-40 h-16">
          <Image
            src={KoanLogo}
            fill
            priority
            alt="koan-logo"
            className="object-contain"
          />
        </div>
      </NavbarBrand>

      {/* Center - Menu Items */}
      <NavbarContent className="hidden sm:flex mr-[80px]" justify="center">
        {menuItems.map((menuitem) => (
          <NavbarItem
            key={menuitem.label}
            isActive={pathname === menuitem.href}
            className={`mx-4 ${
              pathname === menuitem.href
                ? "text-primary font-bold"
                : "text-inherit hover:text-primary/80"
            }`}
          >
            <Link href={menuitem.href}>{menuitem.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right side - Social Icons and Search */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex gap-2">
          <Button color="primary" variant="light" size="sm" isIconOnly>
            <FaFacebook className="w-5 h-5 text-primary" />
          </Button>
          <Button color="primary" variant="light" size="sm" isIconOnly>
            <FaInstagram className="w-5 h-5 text-primary" />
          </Button>
          <Button color="primary" variant="light" size="sm" isIconOnly>
            <FaLinkedin className="w-5 h-5 text-primary" />
          </Button>
          <Button color="primary" variant="light" size="sm" isIconOnly>
            <FaXTwitter className="w-5 h-5 text-primary" />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button color="default" variant="light" size="sm" isIconOnly>
            <FaSearch className="w-5 h-5 text-black" />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="p-4 bg-white rounded-b-lg max-h-[calc(100vh-90px)] overflow-y-auto mt-[70px]">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              href={item.href}
              className={`w-full block py-2 px-4 ${
                pathname === item.href
                  ? "text-primary font-bold"
                  : "text-gray-800 hover:text-primary/80"
              }`}
              onClick={() => setIsMenuOpen(false)} // This will close the menu when clicked
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
