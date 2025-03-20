import {BackBar} from "../../components/movieBooking/BackBar.jsx";
import {Link} from "react-router-dom";
import {BottomBarCover} from "../../components/movieBooking/BottomBarCover.jsx";
import {ReservationSeats} from "../../components/movieReservation/ReservationSeats.jsx";
import {ReservationTime} from "../../components/movieReservation/ReservationTime.jsx";

export function MovieReservation() {
  return (
    <>
      <section className='mx-3 lg:mx-20 lg:max-w-2xl '>
        <BackBar/>
        <div className='relative z-[70] mt-4 lg:mt-12'>
          <div className='mb-6'>
            <ReservationTime/>
          </div>
          <div className='mb-6'>
            <ReservationSeats/>
          </div>
          <Link to={"/movie/1/booking/payment"}
                className='bg-primary flex justify-center w-full p-4 rounded-lg text-dark-300 font-bold text-lg '>Booking</Link>
        </div>
        <BottomBarCover/>
      </section>

    </>
  )
}