import {BackBar} from "../../components/movieBooking/BackBar.jsx";
import {BottomBarCover} from "../../components/movieBooking/BottomBarCover.jsx";
import {TicketPaymentButton} from "../../components/moviePayment/TicketPaymentButton.jsx";
import {TicketPaymentDetail} from "../../components/moviePayment/TicketPaymentDetail.jsx";
import {PricingPaymentDetail} from "../../components/moviePayment/PricingPaymentDetail.jsx";
import { useReservation } from "../../contexts/ReservationContext.jsx";
import { useParams } from "react-router-dom";
import movies from "./../../data/movies.json";
import { useTicket } from "../../contexts/TicketContext.jsx";
import { useState } from "react";

export function MoviePayment() {
  const {movie, cinema, studio, date, time, seats} = useReservation()
  console.log(movie)

  const {id} = useParams()
  const movieN = movies.find((movie) => movie.id === parseInt(id));

  const { addTicket } = useTicket()

  const [newTicket, ] = useState({
    movie: movie,
    cinema: cinema,
    date: date,
    time: time,
    seats: seats,
    studio: studio
  });

  const handleAddTicket = () => {
    addTicket(newTicket);
  };

  return (
    <>
      <section className='mx-3 lg:mx-20  '>
      <BackBar 
          cover={movieN.cover}
          id={movieN.id}
          title={movieN.title}
        />

        <div className='relative z-[70] mt-4 lg:mt-12 lg:flex w-full gap-20'>
          <div className='flex-1'>
            <h1 className='text-xl   mb-6 font-medium text-text-200'>Booking</h1>
            <TicketPaymentDetail
              movie={movie}
              cinema={cinema}
              studio={studio}
              date={date}
              time={time}
              seats={seats}              
            />
          </div>
          <div className='flex-1'>
            <PricingPaymentDetail/>
            <TicketPaymentButton handleCLick={handleAddTicket}/>
          </div>
        </div>

        <BottomBarCover/>
      </section>
    </>
  )
}