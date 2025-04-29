"use client"
import Chip from "@/components/Chip";
import { FaLocationDot } from "react-icons/fa6";
import { PiPhonePause } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { GrTask } from "react-icons/gr";
import { ImUsers } from "react-icons/im";
import { GiTrophy } from "react-icons/gi";
import { RiUserStarFill } from "react-icons/ri";
import useCountUp from "@/hooks/useCountUp";
import { useEffect, useRef, useState } from "react";

const HomeContact = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isStatsInView, setIsStatsInView] = useState(false);

  // Initialize counters with viewport detection
  const projectsCount = useCountUp(3, 2000, isStatsInView);
  const customersCount = useCountUp(20, 2000, isStatsInView);
  const awardsCount = useCountUp(13, 2000, isStatsInView);
  const satisfactionRate = useCountUp(99, 2000, isStatsInView);

  // Set up Intersection Observer
  useEffect(() => {
    const currentRef = statsRef.current; // Store ref in a variable
      
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsInView(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array is safe now
  return (
    <div className="  w-full space-y-8 p-10">
      <Chip>
        <div className="flex flex-row items-center gap-4">
          <span className="rounded-full bg-primary h-2 w-2"></span>
          <span>Contact Us</span>
          <span className="rounded-full bg-primary h-2 w-2"></span>
        </div>
      </Chip>

      <div className="grid grid-cols-2 gap-4 ">
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="text-5xl font-montserrat">
            <span className="text-primary">Contact</span> and Join Together
          </p>

          <p className="font-montserrat">
            We welcome and encourage enquiries regarding our products and
            services, as well as feedback about our operations and potential
            opportunities
          </p>

          <div className="flex flex-row items-start justify-start gap-3 font-montserrat">
            <div className="h-12">
              <Button
                radius="md"
                className="h-full w-full bg-black"
                size="lg"
                variant="solid"
                color="primary"
                isIconOnly
              >
                <FaLocationDot className="w-7 h-7" />
              </Button>
            </div>
            <div className="h-12">
              <div>Office Address</div>
              <div className="font-light">Accra</div>
            </div>
          </div>

          <div className="flex flex-row items-start justify-start gap-3 font-montserrat">
            <div className="h-12">
              <Button
                radius="md"
                className="h-full w-full bg-black"
                size="lg"
                variant="solid"
                color="primary"
                isIconOnly
              >
                <PiPhonePause className="w-7 h-7" />
              </Button>
            </div>
            <div className="h-12">
              <div>Phone Number:</div>
              <div className="font-light">0308235277</div>
            </div>
          </div>

          <div className="flex flex-row items-start justify-start gap-3 font-montserrat">
            <div className="h-12">
              <Button
                radius="md"
                className="h-full w-full bg-black"
                size="lg"
                variant="solid"
                color="primary"
                isIconOnly
              >
                <MdMarkEmailRead className="w-7 h-7" />
              </Button>
            </div>
            <div className="h-12">
              <div>Email Address:</div>
              <address className="font-light">info@koanpetroleum.com</address>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-tertiary w-full rounded-lg drop-shadow-xl p-4 gap-5 flex flex-col items-center justify-center">
            <p className="text-xl">Get in Touch</p>
            <Input
              size="lg"
              label="Your Name"
              type="text"
              labelPlacement="outside"
            />
            <Input
              size="lg"
              label="Your Email"
              type="email"
              labelPlacement="outside"
            />
            <div className="w-full">
              <TextArea />
            </div>
            <div className="flex w-full items-start justify-start">
            
              <Button  color="primary" size="lg" radius="md" type="submit">
                Submit Message
              </Button>
            </div>
          </div>
        </div>

     
      </div>

      <div ref={statsRef} className=" h-[250px] w-full  bg-secondary rounded-2xl  place-items-center grid grid-cols-4 gap-4">
        
        <div className="space-y-2 flex flex-col items-center justify-center">
        <GrTask className="text-white h-20 w-20" />
        <div className="font-montserrat font-bold text-6xl text-white">{projectsCount.toLocaleString()}k+</div>
        <p className="font-lato text-xl text-white">Completed Projects</p>
        </div>

        <div className="space-y-2 flex flex-col items-center justify-center">
        <ImUsers className="text-white h-20 w-20" />
        <div className="font-montserrat font-bold text-6xl text-white">{customersCount.toLocaleString()}k+</div>
        <p className="font-lato text-xl text-white">Happy Customers</p>
        </div>

        <div className="space-y-2 flex flex-col items-center justify-center">
        <GiTrophy className="text-white h-20 w-20" />
        <div className="font-montserrat font-bold text-6xl text-white">{awardsCount.toLocaleString()}k+</div>
        <p className="font-lato text-xl text-white">Award Winning</p>
        </div>

        <div className="space-y-2 flex flex-col items-center justify-center">
        <RiUserStarFill className="text-white h-20 w-20" />
        <div className="font-montserrat font-bold text-6xl text-white">{satisfactionRate.toLocaleString()}%</div>
        <p className="font-lato text-xl text-white">Satisfaction Rate</p>
        </div>
          
          </div>
    </div>
  );
};

export default HomeContact;
