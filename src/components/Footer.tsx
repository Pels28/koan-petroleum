import Image from "next/image";
import LogoImg from "@public/images/koan.jpg";
import Link from "next/link";
import Button from "./Button";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { PiPhonePause } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="w-full bg-primary font-montserrat">
      <div className="w-full bg-gray-light md:grid grid-cols-4 md:gap-4 p-3 max-md:space-y-8">
        <div className="flex flex-col col-span-2 gap-2 max-md:items-center max-md:text-center">
          <div className="h-[120px] w-[200px] p-1">
            <Image src={LogoImg} alt="koan-petroleum-logo" />
          </div>
          <div className="text-white text-sm w-[90%] max-md:w-full">
            KOAN has established itself as the market leader supplying fuel and
            lubricants to mines in Ghana, with expanding footprint in the
            African region and a growing retail network in Ghana.
          </div>

          <div className="flex flex-row items-start justify-start gap-1 max-md:justify-center">
            <Button color="default" variant="light" size="md" isIconOnly>
              <FaFacebook className="w-10 h-8 text-white" />
            </Button>
            <Button color="default" variant="light" size="md" isIconOnly>
              <FaInstagram className="w-10 h-8 text-white" />
            </Button>
            <Button color="default" variant="light" size="md" isIconOnly>
              <FaLinkedin className="w-10 h-8 text-white" />
            </Button>
            <Button color="default" variant="light" size="md" isIconOnly>
              <FaXTwitter className="w-10 h-8 text-white" />
            </Button>
          </div>
        </div>
        <div className="mt-12 max-md:mt-0">
          <p className="text-white flex justify-center md:justify-start font-semibold font-poppins">
            Useful Links
          </p>
          <div className="mt-10 grid grid-cols-2 md:flex md:flex-col text-white gap-2 max-md:mt-5 max-md:gap-4 max-md:px-10">
            <p>
              <Link href="/">Home</Link>
            </p>
            <p>
              <Link href="/about-us">About Us</Link>
            </p>
            <p>
              <Link href="/shop">Shop</Link>
            </p>
            <p>
              <Link href="/contact-us">Contact Us</Link>
            </p>
            <p>
              <Link href="/station-locator">Station Locator</Link>
            </p>
            <p>
              <Link href="/sustainabilty">Sustainablilty</Link>
            </p>
          </div>
        </div>

        <div className="md:mt-12 mt-1 text-white max-md:mt-0 max-md:px-5">
          <p className="hidden md:flex text-white font-semibold font-poppins max-md:flex max-md:justify-center">
            Contact Information
          </p>
          <small className="text-white max-md:flex max-md:justify-center max-md:mb-4">
            Feel free to contact and reach us !
          </small>
          <div className="mt-10 max-md:mt-5 max-md:space-y-4">
            <div className="flex flex-row gap-2 max-md:justify-center">
              <PiPhonePause className="flex w-5 h-5 text-white" />
              <p className="">030823527</p>
            </div>
            <div className="flex flex-row gap-2 max-md:justify-center">
              <FaLocationDot className="flex w-5 h-5" />
              <address>Accra</address>
            </div>
            <div className="flex flex-row gap-2 max-md:justify-center">
              <MdMarkEmailRead className="flex w-5 h-5" />
              <address>info@koanpetroleum.com</address>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-16 flex items-center justify-center text-black mt-2 max-md:text-sm max-md:px-2 max-md:text-center">
        &copy; {new Date().getFullYear()} KOAN PETROLEUM. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;