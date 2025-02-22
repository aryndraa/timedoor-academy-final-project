import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const TicketCard = () => {
  return (
    <div
      style={{ 
        backgroundImage: "url('https://i.pinimg.com/736x/00/e4/9c/00e49c82c7c9438dc4484a58e199123d.jpg')"
       }}
      className="h-[232px] lg:h-[360px] bg-cover rounded-xl flex flex-col justify-end lg:group relative "
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-dark-300/20 to-dark-300 opacity-0 group-hover:opacity-100 transition ease-in-out"></div>
      <div className=" bg-dark-300 group-hover:bg-primary transform group-hover:scale-105 cursor-pointer transition ease-in-out  mx-2 my-2 p-3 rounded-lg relative z-10">
        <h2 className="font-bold mb-2 pb-2 border-b border-b-dark-100 group-hover:text-dark-300 group-hover:border-b-dark-300">Venom 3 : Last Dance</h2>
        <div className="text-sm  mb-2 pb-2 border-b border-b-dark-100  group-hover:text-dark-300  group-hover:border-b-dark-300">
          <p className="flex items-center gap-1 font-medium">
            <span><FaLocationDot/></span>
            Lippo Mall Bali
          </p>
        </div>
        <div className="flex gap-4 text-xs font-medium text-white/50  group-hover:text-dark-300 ">
          <p className="flex items-center gap-1">
            <span><FaRegCalendarAlt/></span>
            12/12/2024
          </p>
          <p className="flex items-center gap-1">
            <span><FaRegClock/></span>
            14.00
          </p>
        </div>
      </div>
    </div>
  )
}
