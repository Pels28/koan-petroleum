// "use client";
// import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
// import Link from "next/link";
// import Image from "next/image";
// import KoanLogo from "@public/images/koan.jpg";
// import { usePathname } from "next/navigation";
// import Button from "./Button";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";

// const menuItems = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about-us" },
//   { label: "Our Services", href: "/our-services" },
//   { label: "Contact Us", href: "/contact-us" },
//   {label : "News", href: "/news"}
// ];

// export default function Menu() {
//   const pathname = usePathname();
//   return (
//     <Navbar
//     position="sticky"
//     shouldHideOnScroll={false}
//     isBlurred
//       isBordered
//       className="font-montserrat"
//       classNames={{
//         content: ["flex items-center text-center justify-center"],
//         item: [
//           "flex",
//           "relative",
//           "h-full",
//           "items-center",
//           "mr-8",
          // "data-[active=true]:after:content-['']",
          // "data-[active=true]:after:absolute",
          // "data-[active=true]:after:bottom-3",
          // "data-[active=true]:after:left-8",
          // "data-[active=true]:after:right-0",
          // "data-[active=true]:after:h-[3px]",
          // "data-[active=true]:after:rounded-[15px]",
          // "data-[active=true]:after:bg-primary",
//         ],
//         brand: "",
        // base: " w-full m-0 p-0 flex items-start justify-start gap-10",
        // menu: "bg-red-50",
        // menuItem: "bg-black"
//       }}
//     >
//       <NavbarBrand className="relative w-80 h-full m-0 p-0 flex justify-start items-start">
//         <Image
//           src={KoanLogo}
//           // width={350}
//           // height={350}
//           fill
//           priority
//           alt="koan-logo"
//           className=""
//         />
//       </NavbarBrand>
//       <NavbarContent
//         className="hidden sm:flex gap-4  items-start"
//         justify="center"
//       >
//         {menuItems.map((menuitem) => (
//           <NavbarItem
//             key={menuitem.label}
//             isActive={pathname === menuitem.href}
//             className={`${
//               pathname === menuitem.href
//                 ? "text-primary font-bold"
//                 : "text-inherit"
//             }`}
//           >
//             <Link href={menuitem.href}>{menuitem.label}</Link>
//           </NavbarItem>
//         ))}

//       </NavbarContent>
//       <NavbarContent justify="end" className="">
// <NavbarItem className="hidden lg:flex mr-0">
// <Button
//   color="primary"
//   className="mr-1"
//   variant="light"
//   size="md"
//   isIconOnly
// >
//   <FaFacebook className="w-5 h-5 text-primary" />
// </Button>
//   <Button color="primary" variant="light" size="md" isIconOnly>
//     <FaInstagram className="w-5 h-5 text-primary" />
//   </Button>
//   <Button color="primary" variant="light" size="md" isIconOnly>
//     <FaLinkedin className="w-5 h-5 text-primary" />
//   </Button>
//   <Button color="primary" variant="light" size="md" isIconOnly>
//     <FaXTwitter className="w-5 h-5 text-primary" />
//   </Button>
// </NavbarItem>
// <NavbarItem className="ml-8">
//   <Button className="" variant="light" size="md" isIconOnly>
//     <FaSearch className="w-5 h-5" />
//   </Button>
// </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }

"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
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
  return (
    <Navbar
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
        menu: "bg-red-50",
        menuItem: "bg-black"
      }}
    >
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
      <NavbarContent className="  mr-[80px]" justify="center">
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
      <NavbarContent justify="end" >
        <NavbarItem className="hidden lg:flex gap-2">
          <Button
            color="primary"
            className=""
            variant="light"
            size="sm"
            isIconOnly
          >
            <FaFacebook className="w-5 h-5 text-primary" />
          </Button>
          <Button
            color="primary"
            className=""
            variant="light"
            size="sm"
            isIconOnly
          >
            <FaInstagram className="w-5 h-5 text-primary" />
          </Button>
          <Button
            color="primary"
            className=""
            variant="light"
            size="sm"
            isIconOnly
          >
            <FaLinkedin className="w-5 h-5 text-primary" />
          </Button>
          <Button
            color="primary"
            className=""
            variant="light"
            size="sm"
            isIconOnly
          >
            <FaXTwitter className="w-5 h-5 text-primary" />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="default"
            className=""
            variant="light"
            size="sm"
            isIconOnly
          >
            <FaSearch className="w-5 h-5 text-black" />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
  



// "use client";
// import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
// import Link from "next/link";
// import Image from "next/image";
// import KoanLogo from "@public/images/koan.jpg";
// import { usePathname } from "next/navigation";
// import Button from "./Button";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";

// const menuItems = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about-us" },
//   { label: "Our Services", href: "/our-services" },
//   { label: "Contact Us", href: "/contact-us" },
//   { label: "News", href: "/news" },
//   { label: "Careers", href: "/careers" },
// ];

// export default function Menu() {
//   const pathname = usePathname();
//   return (
//     <Navbar
//       position="sticky"
//       shouldHideOnScroll={false}
//       isBlurred
//       isBordered
//       className="font-montserrat"
//       classNames={{
//         item: [
//           "flex",
//           "relative",
//           "h-full",
//           "items-center",
//           "data-[active=true]:after:content-['']",
//           "data-[active=true]:after:absolute",
//           "data-[active=true]:after:bottom-3",
//           "data-[active=true]:after:left-8",
//           "data-[active=true]:after:right-0",
//           "data-[active=true]:after:h-[3px]",
//           "data-[active=true]:after:rounded-[15px]",
//           "data-[active=true]:after:bg-primary",
//         ],
//         wrapper: "px-4 max-w-screen-2xl mx-auto",
//       }}
//     >
//       {/* Left side - Brand Logo */}
//       <NavbarBrand className="flex-none w-1/6">
//         <div className="relative w-full h-16">
//           <Image
//             src={KoanLogo}
//             fill
//             priority
//             alt="koan-logo"
//             className="object-contain object-left"
//           />
//         </div>
//       </NavbarBrand>

//       {/* Center - Menu Items */}
//       <NavbarContent className="flex-1 justify-center" justify="center">
//         <div className="flex space-x-8">
//           {menuItems.map((menuitem) => (
//             <NavbarItem
//               key={menuitem.label}
//               isActive={pathname === menuitem.href}
//               className={`${
//                 pathname === menuitem.href
//                   ? "text-primary font-bold"
//                   : "text-inherit hover:text-primary/80"
//               }`}
//             >
//               <Link href={menuitem.href}>{menuitem.label}</Link>
//             </NavbarItem>
//           ))}
//         </div>
//       </NavbarContent>

//       {/* Right side - Social Icons and Search */}
//       <NavbarContent className="flex-none w-1/6 justify-end" justify="end">
//         <div className="flex items-center space-x-4">
//           <div className="hidden lg:flex space-x-2">
//             <Button
//               color="primary"
//               variant="light"
//               size="md"
//               isIconOnly
//               className="hover:bg-primary/10"
//             >
//               <FaFacebook className="w-5 h-5 text-primary" />
//             </Button>
//             <Button
//               color="primary"
//               variant="light"
//               size="md"
//               isIconOnly
//               className="hover:bg-primary/10"
//             >
//               <FaInstagram className="w-5 h-5 text-primary" />
//             </Button>
//             <Button
//               color="primary"
//               variant="light"
//               size="md"
//               isIconOnly
//               className="hover:bg-primary/10"
//             >
//               <FaLinkedin className="w-5 h-5 text-primary" />
//             </Button>
//             <Button
//               color="primary"
//               variant="light"
//               size="md"
//               isIconOnly
//               className="hover:bg-primary/10"
//             >
//               <FaXTwitter className="w-5 h-5 text-primary" />
//             </Button>
//           </div>
//           <Button
//             color="default"
//             variant="light"
//             size="md"
//             isIconOnly
//             className="hover:bg-gray-100"
//           >
//             <FaSearch className="w-5 h-5 text-black" />
//           </Button>
//         </div>
//       </NavbarContent>
//     </Navbar>
//   );
// }