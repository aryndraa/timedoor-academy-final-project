"use client";

import { useState } from "react";
import { IoCalendarClear } from "react-icons/io5";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

export const DiscoverDateSelect = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const modifiersStyles = {
    birthday: {
      color: 'white',
      backgroundColor: '#ffc107',
    },
    thursdays: {
      color: '#ffc107',
      backgroundColor: '#fffdee',
    },
  };
  return (
    <>
      <div
        className="flex justify-between items-center w-full bg-dark-100 px-4 py-3 rounded-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div>
          <p className="text-white/40 text-sm lg:text-base font-medium capitalize">Date</p>
          <strong className="text-sm lg:text-lg font-semibold text-white capitalize">
            {format(selectedDate, "PPP")}
          </strong>
        </div>
        <button
          className="text-2xl bg-white/20 text-white p-2 rounded-full lg:hidden"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
        >
          <IoCalendarClear />
        </button>
      </div>
      {isOpen && (
        <div className="min-h-screen bg-dark-300/60 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="bg-dark-200 w-full max-w-lg p-6 rounded-lg relative">
            <h2 className="text-xl font-medium pb-4 mb-4 border-border border-b-2 text-white">
              Select date
            </h2>
            <DayPicker
              mode="single"
              className="min-w-full"
              selected={selectedDate}
              onSelect={(date) => {
                if (date) setSelectedDate(date);
              }}
              modifiersStyles={ modifiersStyles }
            />
            <button
              className="mt-8 px-4 py-2 bg-white/20 text-white rounded-lg w-full"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
