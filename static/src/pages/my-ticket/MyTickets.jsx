import { useEffect, useState } from "react";
import {SectionTitle} from "../../components/SectionTitle.jsx";
import {TicketCard} from "../../components/cards/TicketCard.jsx";
import {useTicket} from "./../../contexts/TicketContext.jsx"
import movies from "./../../data/movies.json";

export function MyTickets() {

  const [allTickets, setAllTickets] = useState([])

  const {tickets} = useTicket()

  useEffect(() => {
    setAllTickets(tickets);
    console.log(tickets)
  }, [tickets]); 

  return (
    <>
      <section className="mx-3 lg:mx-20 mt-6 lg:mt-12 ">
        <SectionTitle title="All Tickets" />
        <div className="flex flex-col gap-4 lg:gap-8 mt-4 lg:mt-8">
          { allTickets.map((ticket, id) => {
            const movie = movies.find((movie) => movie.title === ticket.movie);

            return (
              <TicketCard 
                key={id}
                ticket={ticket}
                movie={movie} 
                ageRating={movie.age_restriction}
                cinema={ticket.cinema}
                cover={movie.cover}
                date={ticket.date}
                duration={movie.duration}
                genre={movie.genre}
                movieId={movie.id}
                ticketId={ticket.id}
                time={ticket.time}
                title={movie.title}
                language={movie.language}
                seats={ticket.seats}
              />
            );
          })
          }
        </div>
      </section>
    </>
  )
}