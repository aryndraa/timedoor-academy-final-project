import {MovieWidget} from "../../components/ticketDetail/MovieWidget.jsx";
import {TicketCode} from "../../components/ticketDetail/TicketCode.jsx";
import {SeatsBooked} from "../../components/ticketDetail/SeatsBooked.jsx";

export function TicketDetail() {
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-4 lg:gap-8 mx-3 lg:mx-20 mt-6 lg:mt-12 ">
        <div className="lg:hidden">
          <TicketCode/>
        </div>
        <MovieWidget/>
        <div className="w-full flex flex-col gap-8">
          <div className="hidden lg:block">
            <TicketCode/>
          </div>
          <SeatsBooked/>
        </div>
      </section>
    </>
  )
}