import {MovieWidget} from "../../components/ticketDetail/MovieWidget.jsx";
import {TicketCode} from "../../components/ticketDetail/TicketCode.jsx";
import {SeatsBooked} from "../../components/ticketDetail/SeatsBooked.jsx";
import { useTicket } from "../../contexts/TicketContext.jsx";
import { useParams } from "react-router-dom";
import movies from "./../../data/movies.json";

export function TicketDetail() {

  const {tickets} = useTicket()
  const {id} = useParams()

  const ticket = tickets.find((ticket) => ticket.id === parseInt(id));

  const movie = movies.find((movie) => movie.title === ticket.movie)

  return (
    <>
      <section className="flex flex-col lg:flex-row gap-4 lg:gap-8 mx-3 lg:mx-20 mt-6 lg:mt-12 ">
        <div className="lg:hidden">
          <TicketCode code={ticket.code}/>
        </div>
        <MovieWidget
          movie={ticket.movie}
          cinema={ticket.cinema}
          cover={movie.cover}
          date={ticket.date}
          time={ticket.time}
          seats={ticket.seats}
        />
        <div className="w-full flex flex-col gap-8">
          <div className="hidden lg:block">
            <TicketCode code={ticket.code}/>
          </div>
          <SeatsBooked seats={ticket.seats}/>
        </div>
      </section>
    </>
  )
}