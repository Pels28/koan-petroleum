import { Metadata } from "next";
import StationContent from "./StationContent";

export const metadata: Metadata = {
  title: "Station Locator | Find KOAN Petroleum Fuel Stations in Ghana",
  description: "Locate KOAN Petroleum fuel stations in Diaso, Akrowa, Techiman, and Sefwi-Bekwai. Find our LPG outlet in Sefwi-Bekwai.",
  keywords: [
    "KOAN Petroleum stations",
    "Fuel stations in Ghana",
    "KOAN station locator",
    "Petrol stations Techiman",
    "LPG Sefwi-Bekwai",
    "KOAN Diaso station",
    "Akrowa fuel station"
  ],
  authors: [{ name: "KOAN Petroleum" }],
  creator: "KOAN Petroleum",
};


const StationLocator = () => {


  return (
   <StationContent/>
  );
};

export default StationLocator;

// "use client";
// import Button from "@/components/Button";
// import Link from "next/link";
// import { useState, useMemo } from "react";

// type RegionKey = "central" | "greaterAccra" | "bonoEast" | "westernNorth";

// const StationLocator = () => {
//   // Define regions first
//   // Define regions first
//   const regions = useMemo(
//     () => ({
//       central: { name: "Central Region" },
//       greaterAccra: { name: "Greater Accra Region" },
//       bonoEast: { name: "Bono East Region" },
//       westernNorth: { name: "Western North Region" },
//     }),
//     []
//   );

//   const [activeRegion, setActiveRegion] = useState<RegionKey | "all">("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [expandedStation, setExpandedStation] = useState<string | null>(null);

//   // Complete station data with additional information

//   // Filter stations based on search and region

//   const fuelPrices = useMemo(
//     () => ({
//       central: {
//         petrol: 12.5,
//         diesel: 13.2,
//         lastUpdated: "2023-11-15",
//       },
//       greaterAccra: {
//         petrol: 12.8,
//         diesel: 13.5,
//         lpg: 8.75,
//         lastUpdated: "2023-11-15",
//       },
//       bonoEast: {
//         petrol: 12.3,
//         diesel: 13.0,
//         lastUpdated: "2023-11-14",
//       },
//       westernNorth: {
//         petrol: 12.6,
//         diesel: 13.3,
//         lpg: 8.5,
//         lastUpdated: "2023-11-15",
//       },
//     }),
//     []
//   );

//   // Memoize the allStations array to prevent recreation on every render
//   const allStations = useMemo(
//     () => [
//       {
//         id: "diaso",
//         name: "Diaso",
//         type: "Filling Station",
//         region: regions.central.name,
//         district: "Upper Denkyira West",
//         address: "Main Accra-Kumasi Highway",
//         phone: "+233 24 123 4567",
//         hours: "6:00 AM - 10:00 PM Daily",
//         prices: fuelPrices.central,
//         services: ["Petrol", "Diesel", "Engine Oil", "Car Wash"],
//         mapUrl:
//           "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.234723385421!2d-2.1511243!3d6.1501502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdcbd534f828899%3A0xb1d581ba39ad9203!2sKOAN%20FILLING%20STATION!5e0!3m2!1sen!2sgh!4v1714064000000!5m2!1sen!2sgh",
//       },
//       {
//         id: "akrowa",
//         name: "Akrowa",
//         type: "Filling Station",
//         region: regions.greaterAccra.name,
//         district: "Accra Metropolitan",
//         address: "Spintex Road",
//         phone: "+233 30 987 6543",
//         hours: "5:30 AM - 11:00 PM Daily",
//         services: ["Petrol", "Diesel", "LPG", "Tyre Services"],
//         prices: fuelPrices.greaterAccra,
//       },
//       {
//         id: "techiman",
//         name: "Techiman",
//         type: "Filling Station",
//         region: regions.bonoEast.name,
//         district: "Techiman Municipal",
//         address: "Kumasi-Techiman Highway",
//         phone: "+233 55 123 7890",
//         hours: "6:00 AM - 9:30 PM Daily",
//         services: ["Petrol", "Diesel", "Car Wash", "Vehicle Inspection"],
//         prices: fuelPrices.bonoEast,
//       },
//       {
//         id: "sefwi-bekwai",
//         name: "Sefwi-Bekwai",
//         type: "Filling Station",
//         region: regions.westernNorth.name,
//         district: "Bibiani-Anhwiaso-Bekwai",
//         address: "Main Town Road",
//         phone: "+233 20 456 7890",
//         hours: "5:00 AM - 10:00 PM Daily",
//         services: ["Petrol", "Diesel", "LPG", "Mechanical Services"],
//         hasLPG: true,
//         prices: fuelPrices.westernNorth,
//       },
//     ],
//     [regions, fuelPrices]
//   ); // regions is now a dependency since we use it in the data

//   // Filter stations based on search and region
//   const filteredStations = useMemo(() => {
//     return allStations.filter((station) => {
//       const matchesSearch =
//         station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         station.district.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesRegion =
//         activeRegion === "all" ||
//         station.region === regions[activeRegion as RegionKey]?.name;
//       return matchesSearch && matchesRegion;
//     });
//   }, [searchQuery, activeRegion, regions, allStations]);

//   const toggleStationExpansion = (stationId: string) => {
//     setExpandedStation(expandedStation === stationId ? null : stationId);
//   };

//   return (
//     <>
//       <div className="w-full h-[300px] font-montserrat bg-primary flex items-center justify-center">
//     <div className="text-center mt-10 pt-10">
//       <div className="text-[50px] text-white font-montserrat font-bold">
//         KOAN Station Locator
//       </div>
//       <p className="text-white">Find our stations across Ghana</p>
//     </div>
//   </div>

//       <section className="font-montserrat max-w-6xl mx-auto px-4 py-8">
//         {/* Search and Filter Section */}
//         <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label
//                 htmlFor="search"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Search Stations
//               </label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="search"
//                   placeholder="Search by station name or district..."
//                   className="w-full p-3 border border-gray-300 rounded-lg pl-10"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg
//                     className="h-5 w-5 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Filter by Region
//               </label>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//                 <button
//                   onClick={() => setActiveRegion("all")}
//                   className={`py-2 px-3 text-sm rounded-lg border transition-colors ${
//                     activeRegion === "all"
//                       ? "bg-primary text-white border-primary"
//                       : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
//                   }`}
//                 >
//                   All Regions
//                 </button>
//                 {(
//                   Object.entries(regions) as [RegionKey, { name: string }][]
//                 ).map(([key, region]) => (
//                   <button
//                     key={key}
//                     onClick={() => setActiveRegion(key)}
//                     className={`py-2 px-3 text-sm rounded-lg border transition-colors ${
//                       activeRegion === key
//                         ? "bg-primary text-white border-primary"
//                         : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
//                     }`}
//                   >
//                     {region.name.split(" ")[0]}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Results Count */}
//         <div className="mb-4 text-gray-600">
//           Showing {filteredStations.length} station
//           {filteredStations.length !== 1 ? "s" : ""}
//           {activeRegion !== "all" &&
//             ` in ${regions[activeRegion as RegionKey]?.name}`}
//           {searchQuery && ` matching "${searchQuery}"`}
//         </div>

//         {/* Stations List */}
//         <div className="space-y-4">
//           {filteredStations.length > 0 ? (
//             filteredStations.map((station) => (
//               <div
//                 key={station.id}
//                 className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
//               >
//                 <div
//                   className="p-5 cursor-pointer hover:bg-gray-50 transition"
//                   onClick={() => toggleStationExpansion(station.id)}
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-lg font-bold text-gray-800">
//                         {station.name}
//                       </h3>
//                       <p className="text-gray-600">
//                         {station.type} • {station.district}
//                       </p>
//                     </div>
//                     <div className="flex space-x-2">
//                       {station.hasLPG && (
//                         <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                           LPG
//                         </span>
//                       )}
//                       <svg
//                         className={`h-5 w-5 text-gray-400 transition-transform ${
//                           expandedStation === station.id ? "rotate-180" : ""
//                         }`}
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 {expandedStation === station.id && (
//                   <div className="px-5 pb-5 pt-2 border-t">
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div>
//                         <h4 className="font-medium text-gray-800 mb-2">
//                           Station Details
//                         </h4>
//                         <div className="space-y-2 text-sm">
//                           <p>
//                             <span className="text-gray-500">Address:</span>{" "}
//                             {station.address}
//                           </p>
//                           <p>
//                             <span className="text-gray-500">Phone:</span>{" "}
//                             {station.phone}
//                           </p>
//                           <p>
//                             <span className="text-gray-500">Hours:</span>{" "}
//                             {station.hours}
//                           </p>

//                           <div className="mt-3">
//                             <h5 className="text-gray-500 mb-1">
//                               Services Available:
//                             </h5>
//                             <div className="flex flex-wrap gap-2">
//                               {station.services.map((service, idx) => (
//                                 <span
//                                   key={idx}
//                                   className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
//                                 >
//                                   {service}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="mt-4">
//                           <a
//                             href={`https://www.google.com/maps/search/?api=1&query=KOAN+${station.name}+${station.region}+Ghana`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center text-primary hover:underline"
//                           >
//                             <svg
//                               className="w-4 h-4 mr-1"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
//                               />
//                             </svg>
//                             Get Directions
//                           </a>
//                         </div>
//                       </div>

//                       {station.mapUrl && (
//                         <div className="h-64 rounded-lg overflow-hidden border border-gray-200">
//                           <iframe
//                             src={station.mapUrl}
//                             width="100%"
//                             height="100%"
//                             style={{ border: 0 }}
//                             allowFullScreen={true}
//                             loading="lazy"
//                             referrerPolicy="no-referrer-when-downgrade"
//                             title={`KOAN Station in ${station.name}`}
//                           ></iframe>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
//               <svg
//                 className="mx-auto h-12 w-12 text-gray-400"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               <h3 className="mt-2 text-lg font-medium text-gray-900">
//                 No stations found
//               </h3>
//               <p className="mt-1 text-gray-500">
//                 Try adjusting your search or filter criteria
//               </p>
//             </div>
//           )}
//         </div>

        // <div className="bg-gray-50 py-12">
        //   <div className="container mx-auto px-4 text-center">
        //     <h3 className="text-2xl font-bold text-gray-800">
        //       Can&apos;t find what you&apos;re looking for?
        //     </h3>
        //     <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        //       Contact our customer service for assistance in locating the
        //       nearest station to you.
        //     </p>
        //     <Link href="/contact-us">
        //       <Button size="lg" color="primary" className="mt-6 px-6 py-3">
        //         Contact Support
        //       </Button>
        //     </Link>
        //   </div>
        // </div>
//       </section>

    //   <div className="w-full h-[500px]  bg-blackOverlay bg-center bg-cover bg-no-repeat flex items-center justify-center"></div>
//     </>
//   );
// };

// export default StationLocator;

// "use client";
// import Button from "@/components/Button";
// import Link from "next/link";
// import { useState } from "react";

// // Define types for our data structures
// type Station = {
//   name: string;
//   type: string;
//   hasLPG?: boolean;
//   mapUrl?: string;
// };

// type Region = {
//   name: string;
//   stations: Station[];
// };

// type RegionKey = "central" | "greaterAccra" | "bonoEast" | "westernNorth";

// const StationLocator = () => {
//   const [activeRegion, setActiveRegion] = useState<RegionKey>("central"); // Default to Central Region

//   // KOAN stations data organized by region with TypeScript types
//   const regions: Record<RegionKey, Region> = {
//     central: {
//       name: "Central Region",
//       stations: [
//         {
//           name: "Diaso",
//           type: "Filling Station",
//           mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.234723385421!2d-2.1511243!3d6.1501502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdcbd534f828899%3A0xb1d581ba39ad9203!2sKOAN%20FILLING%20STATION!5e0!3m2!1sen!2sgh!4v1714064000000!5m2!1sen!2sgh",
//         },
//       ],
//     },
//     greaterAccra: {
//       name: "Greater Accra Region",
//       stations: [{ name: "Akrowa", type: "Filling Station" }],
//     },
//     bonoEast: {
//       name: "Bono East Region",
//       stations: [{ name: "Techiman", type: "Filling Station" }],
//     },
//     westernNorth: {
//       name: "Western North Region",
//       stations: [
//         { name: "Sefwi-Bekwai", type: "Filling Station", hasLPG: true },
//       ],
//     },
//   };

//   return (
//     <>
//       <div className="w-full h-[300px] font-montserrat bg-primary flex items-center justify-center">
//         <div className="text-center mt-10 pt-10">
//           <div className="text-[50px] text-white font-montserrat font-bold">
//             KOAN Station Locator
//           </div>
//           <p className="text-white">Find our stations across Ghana</p>
//         </div>
//       </div>
//       <section className="font-montserrat max-w-6xl mx-auto px-4 py-8">
//         {/* Region Selection */}
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold mb-4 text-gray-700">
//             Select Region
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//             {(Object.entries(regions) as [RegionKey, Region][]).map(([key, region]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveRegion(key)}
//                 className={`py-3 px-4 rounded-lg border transition-colors ${
//                   activeRegion === key
//                     ? "bg-primary text-white border-primary"
//                     : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
//                 }`}
//               >
//                 {region.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Station Display */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//           <div className="p-5 border-b">
//             <h2 className="text-xl font-semibold text-gray-800">
//               {regions[activeRegion].name} Stations
//             </h2>
//           </div>

//           <div className="divide-y divide-gray-200">
//             {regions[activeRegion].stations.map((station, index) => (
//               <div key={index} className="p-5">
//                 <div className="flex flex-col md:flex-row gap-6">
//                   {/* Station Info */}
//                   <div className="md:w-1/2">
//                     <h3 className="text-lg font-bold text-gray-800 mb-1">
//                       {station.name}
//                     </h3>
//                     <p className="text-gray-600 mb-2">{station.type}</p>

//                     {station.hasLPG && (
//                       <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-3">
//                         LPG Available
//                       </span>
//                     )}

//                     <div className="mt-4">
//                       <a
//                         href={`https://www.google.com/maps/search/?api=1&query=KOAN+${station.name}+Ghana`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center text-primary hover:underline"
//                       >
//                         <svg
//                           className="w-4 h-4 mr-1"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
//                           />
//                         </svg>
//                         Get Directions
//                       </a>
//                     </div>
//                   </div>

//                   {/* Map - Only show for Diaso */}
//                   {station.mapUrl && (
//                     <div key={`map-${index}`} className="md:w-1/2 h-64 rounded-lg overflow-hidden border border-gray-200">
//                       <iframe
//                         src={station.mapUrl}
//                         width="100%"
//                         height="100%"
//                         style={{ border: 0 }}
//                         allowFullScreen={true}
//                         loading="lazy"
//                         referrerPolicy="no-referrer-when-downgrade"
//                         title={`KOAN Station in ${station.name}`}
//                       ></iframe>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer Note */}
//         <div className="mt-6 text-center text-sm text-gray-500">
//           <p>Currently showing KOAN stations in {regions[activeRegion].name}</p>
//         </div>

//         <div className="bg-gray-50 py-12">
//         <div className="container mx-auto px-4 text-center">
//           <h3 className="text-2xl font-bold text-gray-800">Can&apos;t find what you&apos;re looking for?</h3>
//           <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Contact our customer service for assistance in locating the nearest station to you.</p>
//           <Link href="/contact-us"><Button size="lg" color="primary" className="mt-6 px-6 py-3">
//             Contact Support
//           </Button></Link>

//         </div>
//       </div>
//       </section>
//     </>
//   );
// };

// export default StationLocator;
