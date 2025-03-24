import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const CinemaTypeSelect = ({ studios }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedStudio, setSelectedStudio] = useState("Select Cinema"); 

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (studio) => {
    setSelectedStudio(studio);
    setIsOpen(false); 
  };

  return (
    <div className="relative w-full">
      <button 
        onClick={toggleDropdown} 
        className="bg-primary flex w-full justify-between py-3 items-center text-dark-300 px-4 font-bold rounded-lg"
      >
        {selectedStudio} 
        <span className="bg-[#DAA61D] p-1 rounded-full transition-transform" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
          <FaChevronDown />
        </span>
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute w-full bg-dark-100 mt-2 rounded-lg shadow-lg z-10">
          {studios.map((studio, index) => (
            <li 
              key={index} 
              className="px-4 py-2 hover:bg-dark-200 cursor-pointer transition"
              onClick={() => handleSelect(studio)}
            >
              {studio}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
