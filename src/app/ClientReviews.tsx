"use client";

import Chip from "@/components/Chip";
import { Avatar, Divider } from "@heroui/react";
import { RiStarSFill } from "react-icons/ri";

const ClientReviews = () => {
  return (
    <div className="w-full bg-patternOverlay font-montserrat bg-center bg-cover bg-no-repeat">
    <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-3 sm:gap-4 md:gap-5 w-full lg:w-[60%]">
      <Chip>
        <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4">
          <span className="rounded-full bg-primary h-2 w-2"></span>
          <span className="text-sm sm:text-base">Client Reviews</span>
          <span className="rounded-full bg-primary h-2 w-2"></span>
        </div>
      </Chip>
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 px-6 sm:px-8 md:px-10">
      <div className="text-white font-montserrat text-3xl sm:text-4xl md:text-5xl">
        <span className="text-primary text-inherit">Reviews</span> of Clients
      </div>
  
      <div className="text-white text-base sm:text-lg md:text-xl font-montserrat font-light">
        Below are some reviews from our clients
      </div>
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 p-6 sm:p-8 md:p-10 text-white">
      {[
        {
          name: "Kwame Asante",
          role: "Fleet Manager, TransGhana Logistics",
          review:
            "KOAN Petroleum has been our reliable fuel partner for 5 years. Their consistent quality and on-time deliveries keep our 50-truck fleet running smoothly across West Africa. The mobile payment option saves us hours of paperwork each week.",
          rating: 5,
        },
        {
          name: "Ama Serwah",
          role: "Owner, Ama's Food Distributors",
          review:
            "As a small business owner, I appreciate KOAN's competitive pricing and the clean facilities at their Techiman station. Their loyalty program has saved me over ₵2,000 this year alone. The attendants are always helpful and professional.",
          rating: 4,
        },
        {
          name: "Nana Kwaku",
          role: "Mining Operations Director",
          review:
            "KOAN's bulk diesel supply to our gold mining operation has been flawless. Their technical team helped us optimize fuel efficiency, reducing our consumption by 15%. The 24/7 emergency delivery service gives us peace of mind.",
          rating: 5,
        },
      ].map((client, index) => (
        <div
          key={index}
          className="border-1 border-primary-500 rounded-3xl h-[280px] sm:h-[300px] relative bg-primary-800/90 hover:bg-primary-800 transition-all duration-300 shadow-lg"
        >
          <div className="flex flex-col items-center justify-center pt-4 sm:pt-6">
            <Avatar
              className="mt-[-20px] border-2 border-white"
              showFallback
              name={client.name}
              size="lg"
              src=""
              isBordered
              color="primary"
            />
          </div>
  
          <p className="p-4 sm:p-5 text-white font-montserrat text-xs sm:text-sm italic">
            &quot;{client.review}&quot;
          </p>
          <Divider className="bg-white/50" />
  
          <div className="px-4 sm:px-5 pt-2 sm:pt-3">
            <p className="font-semibold text-sm sm:text-base">{client.name}</p>
          </div>
  
          <div className="w-full px-4 sm:px-5 pb-3 sm:pb-4 flex flex-row items-center justify-between absolute bottom-2">
            <p className="text-xs text-white/80">{client.role}</p>
            <div className="flex">
              {[...Array(client.rating)].map((_, i) => (
                <RiStarSFill key={i} className="text-yellow-400 h-3 w-3 sm:h-4 sm:w-4" />
              ))}
              {[...Array(5 - client.rating)].map((_, i) => (
                <RiStarSFill
                  key={i + client.rating}
                  className="text-white/30 h-3 w-3 sm:h-4 sm:w-4"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ClientReviews;
