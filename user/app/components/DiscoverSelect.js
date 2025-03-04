"use client";

import { useState } from "react";

export const DiscoverSelect = ({ name, defaultValue, icon = null, data = [] }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "";
      return newState;
    });
  };

  return (
    <>
      <div
        className="flex justify-between items-center w-full bg-dark-100 px-4 py-3 rounded-lg cursor-pointer"
        onClick={() => handleOpenModal()}
      >
        <div>
          <p className="text-white/40 text-sm lg:text-base font-medium capitalize">{name}</p>
          <strong className="text-sm lg:text-lg font-semibold text-white capitalize">
            {selectedValue}
          </strong>
        </div>
        {icon && (
          <span className="text-2xl bg-white/20 text-white p-2 rounded-full lg:hidden">
            {icon}
          </span>
        )}
      </div>
      {isOpen && (
        <div className="min-h-screen bg-dark-300/60 fixed inset-0 flex items-center justify-center z-40">
          <div className="bg-dark-200 min-w-[92%] lg:min-w-[40%] p-6 rounded-lg relative">
            <h2 className="text-xl font-medium pb-4 mb-4 border-border border-b-2">Select {name}</h2>
            <ul className="space-y-2">
              {data.map((item) => (
                <li key={item}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg text-white ${
                      selectedValue === item ? "bg-primary" : "bg-dark-100"
                    }`}
                    onClick={() => {
                      setSelectedValue(item);
                      handleOpenModal()
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-white/20 text-white rounded-lg w-full"
              onClick={() => handleOpenModal()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
