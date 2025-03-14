import {SectionTitle} from "../components/SectionTitle.jsx";
import {LocationDropdown} from "../components/cinemas/LocationDropdown.jsx";
import {CinemaCard} from "../components/cards/CinemaCard.jsx";

export function Cinemas() {
  return (
    <>
      <section className="mx-3 lg:mx-20 mt-6 lg:mt-12 min-h-screen">
        <div className="flex gap-2 flex-col lg:flex-row lg:items-center justify-between">
          <SectionTitle title="All Cinemas" />
          <LocationDropdown/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-6 lg:mt-8">
          <CinemaCard/>
          <CinemaCard/>
          <CinemaCard/>
          <CinemaCard/>
        </div>
      </section>
    </>
  )
}