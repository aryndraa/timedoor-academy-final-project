import { FaClock } from "react-icons/fa6";
import {CinemaCard} from "../cards/CinemaCard.jsx";
import cinemas from "./../../data/cinemas.json"
import { Link } from "react-router-dom";

export const BookSelectCinema = ({movieId}) => {

  return (
    <div className='flex flex-col gap-3 lg:gap-4'>
      {cinemas.map((cinema) => ( 
       <Link to={`/movies/${movieId}/booking/${cinema.id}/reservation`} className="p-4 bg-dark-200 rounded-lg">
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-2">{cinema.name}</h2>
          <p className="text-sm text-text-400">{cinema.country} | {cinema.province} | {cinema.address}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
           <FaClock/>
           <p>{cinema.open_hours} - {cinema.close_hours}</p>
          </div>
          <div className="self-end flex text-sm lg:text-base gap-3">
            {
              cinema.studio.length > 0 ?
                cinema.studio.map((studio, index) => (
                  <span className="uppercase font-medium" key={index}>{studio}</span>
                ))
                :
                (
                  <>
                    <span>REGULER</span>
                    <span>IMAX</span>
                    <span>VIP</span>
                  </>
              )
            }

          </div>
        </div>
       </Link>
      ))}
    </div>
  )
}
