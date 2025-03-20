import { IoLocationSharp } from "react-icons/io5";

export const BookSelectLocation = () => {
  return (
    <>
      <button className="flex items-center py-3 px-4 text-sm lg:text-base font-semibold lg:font-medium text-white bg-dark-100 gap-2 rounded-full">
        <p className="lg:hidden">
          Bali, Denpa..
        </p>
        <p className="hidden lg:block">
          Bali, Denpasar
        </p>

        <span className="text-lg"><IoLocationSharp/></span>
      </button>
    </>
  )
}
