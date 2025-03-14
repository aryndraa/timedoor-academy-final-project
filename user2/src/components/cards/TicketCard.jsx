import {FaRegClock, FaRegCalendarAlt} from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";
import {TicketInfo} from "../my-ticket/TicketInfo.jsx";
import { FaMapLocationDot } from "react-icons/fa6";
import {Link} from "react-router-dom";

export const TicketCard = () => {
  return (
    <>
      <div
        className="hidden lg:flex gap-4 lg:gap-8 p-3 lg:p-8  border  border-border/20 bg-dark-250 hover:bg-dark-200 transition  ease-in-out">
        <img
          src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"
          alt=""
          className="w-[80px] lg:w-[210px] h-[110px] lg:h-[290px] object-cover"
        />
        <div className="w-full">
          <h2
            className="text-base lg:text-2xl text-text-300 font-medium w-full mb-2 pb-2 lg:mb-5 lg:pb-5 border-b border-border/20">Ruroini
            Kenshin: Origin</h2>
          <div className="hidden lg:flex flex-col lg:flex-row justify-between lg:items-end">
            <div className="w-fit flex flex-col justify-between gap-8">
              <div className="w-fit hidden lg:block">
                <h3 className="text-xs lg:text-sm text-text-400 mb-1 lg:mb-2">Movie Info</h3>
                <div className="grid grid-cols-2 gap-y-2">
                  <TicketInfo name="Genre:" info="Action"/>
                  <TicketInfo name="Duration:" info="158 Minutes"/>
                  <TicketInfo name="Lang: " info="ID"/>
                  <TicketInfo name="Age:" info="13+"/>
                </div>
              </div>
              <div className="w-fit hidden lg:block ">
                <h3 className="text-sm text-text-400 mb-2">Ticket Info</h3>
                <div className="flex flex-row gap-2 lg:gap-12">
                  <div className="flex  flex-col gap-2">
                    <p className="text-sm lg:text-base flex gap-2 items-center">
                      <FaRegCalendarAlt/>
                      12 / 12 / 2024
                    </p>
                    <p className="hidden lg:flex gap-2 items-center">
                      <MdEventSeat className="text-lg"/>
                      2 Seats
                    </p>
                  </div>
                  <div className="flex  flex-col gap-2">
                    <p className=" flex items-center gap-2">
                      <FaRegClock/>
                      19:00
                    </p>
                    <p className=" flex items-start gap-2 font-light ">
                      <FaMapLocationDot className="text-xl"/>
                      Lippo Mall Kuta
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex gap-2 lg:gap-4">
              <Link to="/"
                    className="text-sm lg:text-base py-1 lg:p-2 px-2 lg:px-4 border border-border/40 text-text-400">Movie</Link>
              <Link to="/"
                    className="text-sm lg:text-base py-1 lg:p-2 px-2 lg:px-4 border border-border/40 text-text-400">Cinema</Link>
              <Link to="/"
                    className="text-sm lg:text-base py-1 lg:p-2 px-2 lg:px-4 border border-primary bg-primary text-dark-300 font-semibold">Detail</Link>
            </div>
          </div>
          <div className="lg:hidden  text-border">
            <div className="flex gap-2 mb-2">
              <p className="text-xs lg:text-base  flex gap-2 items-center">
                <FaRegCalendarAlt/>
                12 / 12 / 2024
              </p>
              <p className="text-xs lg:text-base flex items-center gap-1">
                <FaRegClock/>
                19:00
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs lg:text-base flex items-start gap-2 font-light ">
                <FaMapLocationDot/>
                Lippo Mall Kuta
              </p>
              <p className="text-xs lg:text-base flex gap-2 items-center">
                <MdEventSeat className="text-[15px]"/>
                2 Seats
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/"
        className="flex gap-4 lg:gap-8 p-3 lg:p-8  border  border-border/20 bg-dark-250 hover:bg-dark-200 transition  ease-in-out">
        <img
          src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"
          alt=""
          className="w-[80px] lg:w-[210px] h-[110px] lg:h-[290px] object-cover"
        />
        <div className="w-full">
          <h2
            className="text-base lg:text-2xl text-text-300 font-medium w-full mb-2 pb-2 lg:mb-5 lg:pb-5 border-b border-border/20">Ruroini
            Kenshin: Origin</h2>
          <div className="hidden lg:flex flex-col lg:flex-row justify-between lg:items-end">
            <div className="w-fit flex flex-col justify-between gap-8">
              <div className="w-fit hidden lg:block">
                <h3 className="text-xs lg:text-sm text-text-400 mb-1 lg:mb-2">Movie Info</h3>
                <div className="grid grid-cols-2 gap-y-2">
                  <TicketInfo name="Genre:" info="Action"/>
                  <TicketInfo name="Duration:" info="158 Minutes"/>
                  <TicketInfo name="Lang: " info="ID"/>
                  <TicketInfo name="Age:" info="13+"/>
                </div>
              </div>
              <div className="w-fit hidden lg:block ">
                <h3 className="text-sm text-text-400 mb-2">Ticket Info</h3>
                <div className="flex flex-row gap-2 lg:gap-12">
                  <div className="flex  flex-col gap-2">
                    <p className="text-sm lg:text-base flex gap-2 items-center">
                      <FaRegCalendarAlt/>
                      12 / 12 / 2024
                    </p>
                    <p className="hidden lg:flex gap-2 items-center">
                      <MdEventSeat className="text-lg"/>
                      2 Seats
                    </p>
                  </div>
                  <div className="flex  flex-col gap-2">
                    <p className=" flex items-center gap-2">
                      <FaRegClock/>
                      19:00
                    </p>
                    <p className=" flex items-start gap-2 font-light ">
                      <FaMapLocationDot className="text-xl"/>
                      Lippo Mall Kuta
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex gap-2 lg:gap-4">
              <Link to="/"
                    className="text-sm lg:text-base py-1 lg:p-2 px-2 lg:px-4 border border-border/40 text-text-400">Movie</Link>
              <Link to="/"
                    className="text-sm lg:text-base py-1 lg:p-2 px-2 lg:px-4 border border-border/40 text-text-400">Cinema</Link>
              <Link to="/"
                    className="text-sm lg:text-base py-1 lg:p-2 px-2 lg:px-4 border border-primary bg-primary text-dark-300 font-semibold">Detail</Link>
            </div>
          </div>
          <div className="lg:hidden  text-border">
            <div className="flex gap-2 mb-2">
              <p className="text-xs lg:text-base  flex gap-2 items-center">
                <FaRegCalendarAlt/>
                12 / 12 / 2024
              </p>
              <p className="text-xs lg:text-base flex items-center gap-1">
                <FaRegClock/>
                19:00
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs lg:text-base flex items-start gap-2 font-light ">
                <FaMapLocationDot/>
                Lippo Mall Kuta
              </p>
              <p className="text-xs lg:text-base flex gap-2 items-center">
                <MdEventSeat className="text-[15px]"/>
                2 Seats
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>

  )
}
