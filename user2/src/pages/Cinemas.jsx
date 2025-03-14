import {SectionTitle} from "../components/SectionTitle.jsx";
import {LocationDropdown} from "../components/cinemas/LocationDropdown.jsx";

export function Cinemas() {
  return (
    <>
      <section className="mx-20 mt-12 min-h-screen">
        <div className="flex items-center justify-between">
          <SectionTitle title="All Cinemas" />
          <LocationDropdown/>
        </div>
      </section>
    </>
  )
}