"use client";
import Chip from "@/components/Chip";
import { Divider } from "@heroui/react";
import { FaLocationDot } from "react-icons/fa6";
import { PiPhonePause } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { IoIosSend } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ContactUsContent = () => {
  const cards = [
    {
      icon: <FaLocationDot size={30} className="text-white" />,
      title: "Location..",
      subtitle: "Visit Us At",
      details: ["Sefwi Bekwai"],
    },
    {
      icon: <PiPhonePause size={30} className="text-white" />,
      title: "24*7 SERVICE..",
      subtitle: "Call Us On",
      details: ["Mob : 0308235277"],
    },
    {
      icon: <MdMarkEmailRead size={30} className="text-white" />,
      title: "DROP A LINE..",
      subtitle: "Mail Address",
      details: ["info@koanpetroleum.com"],
    },
    {
      icon: <IoTimeSharp size={30} className="text-white" />,
      title: "OFFICE HOURS..",
      subtitle: "Opening Time",
      details: ["Mon - Fri : 9am - 6pm", "Sunday (Closed)"],
    },
  ];

  return (
    <section className="font-montserrat">
      <div className="w-full h-[450px] bg-contactOverlay bg-center bg-cover bg-no-repeat flex items-center justify-center max-md:h-[350px] max-sm:h-[300px]">
        <div className="flex flex-col items-center justify-center text-center mt-10 pt-10 max-md:mt-5 max-md:pt-5">
          <div className="text-[100px] text-white font-montserrat font-bold max-md:text-[70px] max-sm:text-[50px]">
            Contact Us
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 w-7 rounded-xl bg-white max-md:w-[80px] max-sm:w-[60px]"
          />
        </div>
      </div>

      <div className="bg-primary-50 w-full p-10 flex flex-col items-center justify-center gap-2 max-md:p-5">
        <div className="p-5 flex flex-col items-center justify-center gap-5 w-full max-md:p-2">
          <Chip>
            <div className="flex flex-row items-center gap-4">
              <span className="rounded-full bg-primary h-2 w-2"></span>
              <span>Contact Info</span>
              <span className="rounded-full bg-primary h-2 w-2"></span>
            </div>
          </Chip>
        </div>

        <div className="max-md:px-5">
          <p className="text-5xl max-md:text-3xl max-sm:text-2xl">
            <span className="text-primary">Contact</span> & Join Together
          </p>
          <Divider className="w-10 h-1 bg-primary" />
        </div>

        <div className="p-2 max-md:px-5">
          Via this page you can find contact details for our offices and
          businesses across Ghana.
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 p-6 bg-[#f8f9fc] max-sm:grid-cols-1 max-sm:p-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center space-y-3 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center items-center mb-2">
                <div className="bg-primary p-4 rounded-full">{card.icon}</div>
              </div>
              <p className="text-sm text-gray-600 font-semibold">
                {card.title}
              </p>
              <h3 className="text-xl font-semibold text-red-500">
                {card.subtitle}
              </h3>
              <div className="text-gray-500 text-sm leading-relaxed mt-2 space-y-1">
                {card.details.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r h-[150px]  from-primary via-secondary to-tertiary"></div>

      <div className="bg-white p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 place-items-center place-content-center mb-8 lg:mb-0">
          <div className="bg-primary text-white w-full max-w-xs sm:max-w-sm rounded-[40px] p-6 sm:p-8 flex flex-col items-center space-y-4 sm:space-y-5 shadow-lg">
            <div className="bg-white text-primary p-4 sm:p-5 rounded-full">
              <FaWhatsapp size={30}  />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold">Chat With Us!</h3>
            <p className="text-center text-xs sm:text-sm">
              Need help? Chat with our support team on WhatsApp. We&apos;re
              always happy to assist!
            </p>
            <Button
              className=""
              color="secondary"
              variant="ghost"
              size="lg"
              radius="full"
              endContent={<IoChatbubbleEllipsesOutline />}
            >
              LET&apos;S CHAT
            </Button>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 place-items-center">
          <div className="p-4 sm:p-5 flex flex-col items-center justify-center gap-4 sm:gap-5 w-full">
            <Chip>
              <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4">
                <span className="rounded-full bg-primary h-2 w-2"></span>
                <span className="text-sm sm:text-base">Contact Info</span>
                <span className="rounded-full bg-primary h-2 w-2"></span>
              </div>
            </Chip>
          </div>

          <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
            <span className="text-primary">Reach</span>& Get in Touch With Us!
          </div>

          <div className="w-full md:w-[90%] lg:w-[80%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Input
                size="lg"
                label="Your Name"
                type="text"
                labelPlacement="outside"
                isRequired
              />
              <Input
                size="lg"
                label="Your Email"
                type="email"
                labelPlacement="outside"
                isRequired
              />
              <Input
                size="lg"
                label="Your Number"
                type="tel"
                labelPlacement="outside"
                isRequired
              />
              <Input
                size="lg"
                label="Your Subject"
                type="text"
                labelPlacement="outside"
                isRequired
              />
              <div className="col-span-1 sm:col-span-2 mt-3 sm:mt-4">
                <TextArea />
              </div>

              <div className="col-span-1 sm:col-span-2">
                <Button
                  endContent={<IoIosSend />}
                  color="primary"
                  radius="full"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        className="w-full h-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9597758880654!2d-0.15109659999999998!3d5.6498601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf83004af93d7b%3A0x9d8b0359baf3304a!2sKOAN%20PETROLEUM%20LTD!5e0!3m2!1sen!2sgh!4v1713970600045!5m2!1sen!2sgh"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default ContactUsContent;
