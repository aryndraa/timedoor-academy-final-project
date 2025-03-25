import {FaRegCalendarAlt, FaRegClock} from "react-icons/fa";
import {MdEventSeat} from "react-icons/md";
import {FaMapLocationDot} from "react-icons/fa6";

export const MovieWidget = ({movie, cover, cinema, seats = [], date, time}) => {
  return (
    <div className="lg:p-6 p-4 h-fit w-full lg:min-w-[300px] border border-border/20 ">
      <img
        src={cover}
        alt=""
        className=" w-[120px] h-[160px] lg:w-[240px] lg:h-[280px] object-cover mb-4"
      />
      <div>
        <h1 className="text-xl font-medium pb-2 mb-2 lg:pb-4 lg:mb-4 border-b border-border/20">{movie}</h1>
        <div className="text-text-400 flex flex-col gap-2 lg:gap-4">
          <p className=" text-sm lg:text-base flex items-start gap-2 font-light ">
            <FaMapLocationDot className="text-xl"/>
           {cinema}
          </p>
          <p className="flex text-sm lg:text-base  gap-2 items-center">
            <MdEventSeat className="text-lg"/>
            {seats.length ?? 0} Seats
          </p>
          <div className="flex gap-4">
            <p className="text-sm lg:text-base flex gap-2 items-center">
              <FaRegCalendarAlt/>
              {date}
            </p>
            <p className="text-sm lg:text-base flex gap-2 items-center">
              <span><FaRegClock/></span>
              {time}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}