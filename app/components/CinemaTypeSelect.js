import { FaChevronDown } from "react-icons/fa";

export const CinemaTypeSelect = () => {
  return (
    <>
      <button className="bg-primary flex w-full  lg:gap-4 justify-between py-3  items-center gap-2 text-dark-300 p-1.5 px-4 font-bold rounded-lg">
        CINEMA IMAX <span className="bg-[#DAA61D] p-1 rounded-full"><FaChevronDown/></span>
      </button>
    </>
  )
}
