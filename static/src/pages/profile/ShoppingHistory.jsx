import {ProfileLayout} from "../../layouts/ProfileLayout.jsx";
import {SectionTitle} from "../../components/SectionTitle.jsx";
import {ProfileForm} from "../../components/profile/ProfileForm.jsx";
import { useEffect, useState } from "react";
import {ContactForm} from "../../components/profile/ContactForm.jsx";
import {TicketCard} from "../../components/cards/TicketCard.jsx";
import movies from "./../../data/movies.json";
import {useTicket} from "./../../contexts/TicketContext.jsx"
import {IoArrowBack} from "react-icons/io5";
import {Link} from "react-router-dom";

export const ShoppingHistory = () => {
    const [allTickets, setAllTickets] = useState([])
  
    const {tickets} = useTicket()
  
    useEffect(() => {
      setAllTickets(tickets);
      console.log(tickets)
    }, [tickets]); 

  return (
    <>
      <div className="hidden lg:block">
        <ProfileLayout>
          <section className="w-full">
            <SectionTitle title="Shopping History"/>
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
                    payment={true}
                  />
                );
              })
              }
            </div>
          </section>
        </ProfileLayout>
      </div>
      <div className="lg:hidden">
        <section className="mt-6 mx-3">
          <Link to="/profile/" className="flex gap-2 mb-4 items-center text-xl">
            <IoArrowBack className="text-2xl"/> Back
          </Link>
          <SectionTitle title="Shopping History"/>
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
                  payment={true}
                />
              );
            })
            }
          </div>
        </section>
      </div>
    </>
  )
}