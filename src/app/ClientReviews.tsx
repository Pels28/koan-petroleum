"use client";

import Chip from "@/components/Chip";
import { Avatar, Divider } from "@heroui/react";
import { RiStarSFill } from "react-icons/ri";

const ClientReviews = () => {
  return (
    <div className="w-full  bg-patternOverlay font-montserrat bg-center bg-cover bg-no-repeat ">
      <div className="p-10 flex flex-col gap-5 w-[60%]">
        <Chip>
          <div className="flex flex-row items-center gap-4">
            <span className="rounded-full bg-primary h-2 w-2"></span>
            <span>Client Reviews</span>
            <span className="rounded-full bg-primary h-2 w-2"></span>
          </div>
        </Chip>
      </div>

      <div className="grid grid-cols-2 gap-3 px-10 ">
        <div className="text-white font-montserrat text-5xl">
          <span className="text-primary text-inherit">Reviews</span> of Clients
        </div>

        <div className="text-white text-xl font-montserrat font-light">
          Below are some reviews from our clients
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 text-white">
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
            className="border-1 border-primary-500 rounded-3xl h-[300px] relative bg-primary-800/90 hover:bg-primary-800 transition-all duration-300 shadow-lg"
          >
            <div className="flex flex-col items-center justify-center pt-6">
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

            <p className="p-5 text-white font-montserrat text-sm italic">
              &quot;{client.review}&quot;
            </p>
            <Divider className="bg-white/50" />

            <div className="px-5 pt-3">
              <p className="font-semibold">{client.name}</p>
              {/* <p className="text-sm text-white/80">{client.role}</p> */}
            </div>

            <div className="w-full px-5 pb-4 flex flex-row items-center justify-between absolute bottom-2">
              <p className="text-xs text-white/80">{client.role}</p>
              <div className="flex">
                {[...Array(client.rating)].map((_, i) => (
                  <RiStarSFill key={i} className="text-yellow-400 h-4 w-4" />
                ))}
                {[...Array(5 - client.rating)].map((_, i) => (
                  <RiStarSFill
                    key={i + client.rating}
                    className="text-white/30 h-4 w-4"
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
