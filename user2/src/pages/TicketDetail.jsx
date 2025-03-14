import {MovieWidget} from "../components/ticketDetail/MovieWidget.jsx";
import {TicketCode} from "../components/ticketDetail/TicketCode.jsx";

export function TicketDetail() {
  return (
    <>
      <section className="flex gap-8 mx-3 lg:mx-20 mt-6 lg:mt-12 ">
        <MovieWidget/>
        <div className="w-full">
          <TicketCode/>
        </div>
      </section>
    </>
  )
}