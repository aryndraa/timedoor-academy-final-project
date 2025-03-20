import {BackBar} from "../../components/movieBooking/BackBar.jsx";
import {BookSelectLocation} from "../../components/movieBooking/BookSelectLocation.jsx";
import {BookSelectCinema} from "../../components/movieBooking/BookSelectCinema.jsx";
import {BottomBarCover} from "../../components/movieBooking/BottomBarCover.jsx";
import {LocationDropdown} from "../../components/cinemas/LocationDropdown.jsx";

export function MovieBooking() {
  return (
    <>
      <section className='mx-3 lg:mx-20'>
        <BackBar/>
        <div className='mt-4 lg:mt-12'>
          <div className="flex gap-2 flex-col lg:flex-row lg:items-center justify-between mb-8">
            <h2 className='text-xl  font-medium text-text-200 '>Select Cinema</h2>
            <LocationDropdown/>
          </div>
          <BookSelectCinema/>
        </div>
        <BottomBarCover/>
      </section>

    </>
  )
}