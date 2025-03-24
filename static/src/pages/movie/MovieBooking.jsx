import {BackBar} from "../../components/movieBooking/BackBar.jsx";
import {BookSelectLocation} from "../../components/movieBooking/BookSelectLocation.jsx";
import {BookSelectCinema} from "../../components/movieBooking/BookSelectCinema.jsx";
import {BottomBarCover} from "../../components/movieBooking/BottomBarCover.jsx";
import {LocationDropdown} from "../../components/cinemas/LocationDropdown.jsx";
import { useParams } from "react-router-dom";
import movies from "./../../data/movies.json";

export function MovieBooking() {

  const {id} = useParams()
  const movie = movies.find((movie) => movie.id === parseInt(id));


  return (
    <>
      <section className='mx-3 lg:mx-20'>
        <BackBar 
          cover={movie.cover}
          id={movie.id}
          title={movie.title}
        />
        <div className='mt-4 lg:mt-12'>
          <div className="flex gap-2 flex-col lg:flex-row lg:items-center justify-between mb-8">
            <h2 className='text-xl  font-medium text-text-200 '>Select Cinema</h2>
          </div>
          <BookSelectCinema/>
        </div>
        <BottomBarCover/>
      </section>

    </>
  )
}