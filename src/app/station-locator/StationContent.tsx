"use client";
import { useState, useMemo } from "react";
import { RiGasStationFill, RiOilFill } from "react-icons/ri";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import Link from "next/link";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { FaSearch } from "react-icons/fa";
import {Checkbox} from "@heroui/react";

const StationContent = () => {
    const [activeRegion, setActiveRegion] = useState<string>("All Regions");
    const [searchTerm, setSearchTerm] = useState("");
    const [showLPGOnly, setShowLPGOnly] = useState(false);
  
    // Our four available regions
    const availableRegions = [
      "Central Region",
      "Greater Accra Region",
      "Bono East Region",
      "Western Region",
    ];
  
    // Filter stations based on active region, search term and LPG filter
    const filteredStations = useMemo(() => {
      return [
        {
          id: "diaso",
          name: "Diaso",
          type: "Filling Station",
          region: "Central Region",
          district: "Upper Denkyira West",
          fuels: ["Super", "Diesel"],
          address: "Dunkwa-on-Offin",
          phone: "0308235277",
          hours: "6:00 AM - 10:00 PM Daily",
          mapUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.234723385421!2d-2.1511243!3d6.1501502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdcbd534f828899%3A0xb1d581ba39ad9203!2sKOAN%20FILLING%20STATION!5e0!3m2!1sen!2sgh!4v1714064000000!5m2!1sen!2sgh",
          hasLPG: false,
        },
        {
          id: "akrowa",
          name: "Akrowa",
          type: "Filling Station",
          region: "Ashanti Region",
          district: "Afigya Kwabre South",
          fuels: ["Super", "Diesel", "LPG"],
          address: "Buoho Road",
          phone: "0308235277",
          hours: "5:30 AM - 11:00 PM Daily",
          mapUrl: "",
          hasLPG: false,
        },
        {
          id: "techiman",
          name: "Techiman",
          type: "Filling Station",
          region: "Bono East Region",
          district: "Techiman Municipal",
          fuels: ["Super", "Diesel"],
          address: "Kumasi-Techiman Highway",
          phone: "0308235277",
          hours: "6:00 AM - 9:30 PM Daily",
          mapUrl: "",
          hasLPG: false,
        },
        {
          id: "sefwi-bekwai",
          name: "Sefwi-Bekwai",
          type: "Filling Station",
          region: "Western Region",
          district: "Bibiani-Anhwiaso-Bekwai",
          fuels: ["Super", "Diesel", "LPG"],
          address: "Main Town Road",
          phone: "0308235277",
          hours: "5:00 AM - 10:00 PM Daily",
          mapUrl: "",
          hasLPG: true,
        },
      ].filter((station) => {
        const matchesRegion =
          activeRegion === "All Regions" || station.region === activeRegion;
        const matchesSearch =
          station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          station.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
          station.region.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLPG = !showLPGOnly || station.hasLPG;
  
        return matchesRegion && matchesSearch && matchesLPG;
      });
    }, [activeRegion, searchTerm, showLPGOnly]);
    return  <>
    <div className="w-full h-[300px] font-montserrat bg-primary flex items-center justify-center">
      <div className="text-center mt-10 pt-10">
        <div className="text-[50px] text-white font-montserrat font-bold">
          KOAN Station Locator
        </div>
        <p className="text-white">Find our stations across Ghana</p>
      </div>
    </div>
       {/* <div className="relative w-full h-[300px] bg-news-hero bg-center bg-cover bg-no-repeat flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-primary/30"></div>
        <motion.div 
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl text-white font-bold mb-4">Koan Station Locator</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
          Find our stations across Ghana
          </p>
        </motion.div>
      </div> */}

    <div className="font-sans max-w-7xl mx-auto px-4 py-8">
      {/* Header */}

      {/* Search and Filters */}
      <div className="mb-6 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Input
                type="search"
                placeholder="Search stations by name or district or region..."
                className="w-full p-3 "
                size="lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
                label="" 
                labelPlacement="inside"   
                startContent={<FaSearch className="text-tertiary-deep h-6 w-6"/>}       />
            {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div> */}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={showLPGOnly}
              onChange={(e) => setShowLPGOnly(e.target.checked)}
              className="h-4 w-4 text-primary rounded"
            />
            <span>Show only LPG stations</span>
          </label> */}
            <Checkbox onChange={(e) => setShowLPGOnly(e.target.checked)} isSelected={showLPGOnly} size="lg">Show only LPG stations</Checkbox>;
        </div>
      </div>

      {/* Region Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          onPress={() => setActiveRegion("All Regions")}
          radius="full"
          size="lg"
          color="primary"
          variant={activeRegion === "All Regions" ? "solid" : "bordered"}
          className="px-4 py-2"
        >
          All Stations
        </Button>
        {availableRegions.map((region) => (
          <Button
            key={region}
            size="lg"
            color="primary"
            radius="full"
            variant={activeRegion === region ? "solid" : "bordered"}
            onPress={() => setActiveRegion(region)}
            className="px-4 py-2"
          >
            {region}
          </Button>
        ))}
      </div>

      {/* Stations Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <RiGasStationFill className="mr-2" />
                    Station
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <RiOilFill className="mr-2" />
                    Fuels Available
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <FaLocationDot className="mr-2" />
                    Location
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <FaPhone className="mr-2" />
                    Contact
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <IoTimeSharp className="mr-2" />
                    Hours
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Map
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStations.map((station) => (
                <tr key={station.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">
                      {station.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {station.type}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-2">
                      {station.fuels.map((fuel) => (
                        <span
                          key={fuel}
                          className={`px-2 py-1 text-xs rounded-full ${
                            fuel === "LPG"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {fuel}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-[16px] text-gray-900">
                      {station.region}
                    </div>
                    <div className="text-sm text-gray-900">
                      {station.district}
                    </div>
                    <div className="text-xs text-gray-500">
                      {station.address}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {station.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {station.hours}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {station.mapUrl && (
                      <div className="h-24 w-32 rounded-md overflow-hidden border border-gray-200">
                        <iframe
                          src={station.mapUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Map of ${station.name}`}
                        ></iframe>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredStations.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg mt-4">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            No stations found
          </h3>
          <p className="mt-1 text-gray-500">
            {showLPGOnly
              ? "No LPG stations match your search"
              : "Try adjusting your search or filter criteria"}
          </p>
        </div>
      )}
    </div>

    <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-800">
            Can&apos;t find what you&apos;re looking for?
          </h3>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Contact our customer service for assistance in locating the
            nearest station to you.
          </p>
          <Link href="/contact-us">
            <Button size="lg" color="primary" className="mt-6 px-6 py-3">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-[500px]  bg-blackOverlay bg-center bg-cover bg-no-repeat flex items-center justify-center"></div>
  </>
}

export default StationContent