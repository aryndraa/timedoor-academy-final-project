import { IoLocationSharp } from "react-icons/io5";

export const DiscoverSelect = () => {
  return (
    <div className="flex justify-between items-center w-full bg-dark-100 px-4 py-3 rounded-lg">
      <div>
        <p className="text-white/40 text-sm font-medium mb-0.5">Location</p>
        <strong className=" font-semibold">Bali, Denpasar</strong>
      </div>
      <span className="text-2xl bg-white/20 text-white p-2 rounded-full">
        <IoLocationSharp/>
      </span>
    </div>
  )
}