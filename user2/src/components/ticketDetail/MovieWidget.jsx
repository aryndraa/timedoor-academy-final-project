import {FaRegCalendarAlt, FaRegClock} from "react-icons/fa";
import {MdEventSeat} from "react-icons/md";
import {FaMapLocationDot} from "react-icons/fa6";

export const MovieWidget = () => {
  return (
    <div className="lg:p-6 p-4 h-fit w-full lg:min-w-[300px] border border-border/20 ">
      <img
        src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"
        alt=""
        className="lg:w-full w-[120px] h-[160px] lg:h-[300px] object-cover mb-4"
      />
      <div>
        <h1 className="text-xl font-medium pb-2 mb-2 lg:pb-4 lg:mb-4 border-b border-border/20">Ruroinin Kenshin : Origin</h1>
        <div className="text-text-400 flex flex-col gap-2 lg:gap-4">
          <p className=" text-sm lg:text-base flex items-start gap-2 font-light ">
            <FaMapLocationDot className="text-xl"/>
            Lippo Mall Kuta
          </p>
          <p className="flex text-sm lg:text-base  gap-2 items-center">
            <MdEventSeat className="text-lg"/>
            2 Seats
          </p>
          <div className="flex gap-4">
            <p className="text-sm lg:text-base flex gap-2 items-center">
              <FaRegCalendarAlt/>
              12 / 12 / 2024
            </p>
            <p className="text-sm lg:text-base flex gap-2 items-center">
              <span><FaRegClock/></span>
              19:00
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}