"use client";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, useDisclosure } from "@heroui/react";
import Button from "@/components/Button";
import { RiGasStationFill, RiOilFill } from "react-icons/ri";
import { GiFuelTank } from "react-icons/gi";
import { TbGasStation } from "react-icons/tb";

const FuelPricesBoard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Fuel price data
  const fuelPrices = [
    { type: "Super", price: 12.80, trend: "up", change: 0.20, icon: <RiGasStationFill className="text-red-500" /> },
    { type: "Diesel", price: 13.50, trend: "down", change: 0.15, icon: <RiOilFill className="text-blue-500" /> },
    { type: "LPG", price: 8.75, trend: "neutral", change: 0, icon: <GiFuelTank className="text-orange-500" /> },
    { type: "Kerosene", price: 10.20, trend: "up", change: 0.30, icon: <TbGasStation className="text-yellow-500" /> }
  ];

  return (
    <>
      <Button 
        onPress={onOpen} 
        color="primary" 
        variant="flat"
        className=""
      >
        Live Fuel Prices
        
      </Button>

      <Drawer 
        isOpen={isOpen} 
        className="font-montserrat" 
        onOpenChange={onOpenChange}
        // placement="bottom"
        size="5xl"
      >
        <DrawerContent className="bg-gradient-to-b from-gray-50 to-white">
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800">Current Fuel Prices</h3>
                  <span className="text-sm text-gray-500">Updated: {new Date().toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-gray-600">Prices in GHS per liter</p>
              </DrawerHeader>
              
              <DrawerBody>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
                  {fuelPrices.map((fuel) => (
                    <div 
                      key={fuel.type}
                      className={`relative p-4 rounded-xl border transition-all hover:shadow-lg ${
                        fuel.trend === 'up' ? 'border-red-100 bg-red-50' : 
                        fuel.trend === 'down' ? 'border-green-100 bg-green-50' : 
                        'border-gray-100 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{fuel.icon}</span>
                            <h4 className="text-lg font-semibold text-gray-800">{fuel.type}</h4>
                          </div>
                          <p className="text-3xl font-bold mt-2">
                            {fuel.price.toFixed(2)}
                            <span className="text-sm font-normal ml-1">GHS</span>
                          </p>
                        </div>
                        {fuel.trend !== 'neutral' && (
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            fuel.trend === 'up' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {fuel.trend === 'up' ? '↑' : '↓'} {fuel.change.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>7-day trend</span>
                          <span className={`font-medium ${
                            fuel.trend === 'up' ? 'text-red-600' : 
                            fuel.trend === 'down' ? 'text-green-600' : 
                            'text-gray-600'
                          }`}>
                            {fuel.trend === 'up' ? 'Increasing' : fuel.trend === 'down' ? 'Decreasing' : 'Stable'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-100">
                  <h4 className="text-primary-800 font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                    Pricing Notice
                  </h4>
                  <p className="text-sm text-primary-700 mt-1">
                    Prices are updated daily at 6:00 AM. Regional variations may apply.
                  </p>
                </div>
              </DrawerBody>

              <DrawerFooter className="border-t border-gray-200">
                <div className="flex justify-between items-center w-full">
                  <span className="text-sm text-gray-500">
                    Source: National Petroleum Authority
                  </span>
                  <Button 
                    color="primary" 
                    variant="solid" 
                    onPress={onClose}
                    className="min-w-[100px]"
                  >
                    Close
                  </Button>
                </div>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FuelPricesBoard;