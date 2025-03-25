import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const ButtonPaymentMethod = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("Credit Card");

  const paymentMethods = ["Credit Card", "Bank Transfer", "E-Wallet", "PayPal"];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 lg:p-5 lg:text-lg bg-dark-200 w-full font-semibold text-start rounded-lg flex justify-between items-center"
      >
        {selectedMethod} <FaChevronDown />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-dark-200 rounded-lg shadow-lg z-10">
          {paymentMethods.map((method, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedMethod(method);
                setIsOpen(false);
              }}
              className="p-4 lg:p-5 text-start w-full hover:bg-dark-300 transition"
            >
              {method}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
