import {SectionTitle} from "../components/SectionTitle.jsx";
import {LocationDropdown} from "../components/cinemas/LocationDropdown.jsx";
import {CinemaCard} from "../components/cards/CinemaCard.jsx";
import {useEffect, useState} from "react";
import cinema from "./../api/cinema.js" ;

export function Cinemas() {
  const [cinemas, setCinema] = useState([]);

  useEffect(() => {
    const fetchCinemas = async () => {
      const data = await cinema.allCinemas();
      console.log(data);
      if(data) {
        setCinema(data);
      }
    }

    fetchCinemas()
  }, [])



  return (
    <>
      <section className="mx-3 lg:mx-20 mt-6 lg:mt-12 min-h-screen">
        <div className="flex gap-2 flex-col lg:flex-row lg:items-center justify-between">
          <SectionTitle title="All Cinemas" />
          <LocationDropdown/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-6 lg:mt-8">
          {cinemas ? cinemas.map((cinema) => (
            <CinemaCard key={cinema.id}
                        name={cinema.name}
                        address={cinema.address}
                        picture={cinema.picture.file_link}
                        country={cinema.country}
                        province={cinema.province}
                        openingTime={cinema.opening_time}
                        closingTime={cinema.closing_time}
                        studios={cinema.studios}
            />
          )) : "Bioskop Tidak Tersedia"}
        </div>
      </section>
    </>
  )
}