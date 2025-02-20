"use client"
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

export const DiscoverLocationSelect = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = {
    indonesia: ["bali", "jawa", "jakarta"],
    japan: ["tokyo", "osaka", "kyoto"],
    china: ["beijing", "shanghai", "guangzhou"],
    india: ["delhi", "mumbai", "bangalore"],
    south_korea: ["seoul", "busan", "incheon"],
    thailand: ["bangkok", "chiang mai", "phuket"],
    philippines: ["manila", "cebu", "davao"],
    vietnam: ["hanoi", "ho chi minh", "da nang"],
    malaysia: ["kuala lumpur", "penang", "johor bahru"],
    singapore: ["singapore"]
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setIsModalOpen(false);
  };

  const handleBackCountry = () => {
    setSelectedCountry(null) 
    setSelectedLocation(null)
  }

  return (
    <>
      <div className="flex justify-between items-center w-full bg-dark-100 px-4 py-3 rounded-lg" onClick={() => setIsModalOpen(true)}>
        <div>
          <p className="text-white/40 text-sm lg:text-base font-medium capitalize">Location</p>
          <strong className="text-sm lg:text-lg font-medium text-white capitalize">
            {selectedCountry && selectedLocation ? `${selectedCountry}, ${selectedLocation}` : "Select Location"}
          </strong>
        </div>
        <span className="text-2xl bg-white/20 text-white p-2 rounded-full lg:hidden">
          <IoLocationSharp/>
        </span>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-dark-300/60 flex items-center justify-center">
          <div className="bg-dark-200 min-w-[40%] p-6 rounded-lg">
            <h2 className="text-xl font-medium pb-4 mb-4 border-border border-b-2">Cinema Location</h2>
            {selectedCountry === null ? (
              <ul className="h-full">
                {Object.keys(locations).map((country) => (
                  <li key={country} className="py-2 px-4 cursor-pointer hover:bg-dark-100 rounded" onClick={() => setSelectedCountry(country)}>
                    {country.replace(/_/g, ' ')}
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {locations[selectedCountry].map((location) => (
                  <li key={location} className="py-2 px-4 cursor-pointer hover:bg-dark-100 rounded" onClick={() => handleSelectLocation(location)}>
                    {location}
                  </li>
                ))}
                <button className="mt-4 text-sm text-white/60 bg-dark-100 p-3 font-medium rounded-lg" onClick={() => handleBackCountry()}>Back to Country Selection</button>
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};