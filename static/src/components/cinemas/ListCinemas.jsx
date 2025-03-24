import { useEffect, useState } from "react";
import cinemas from "./../../data/cinemas.json";
import { useCinema } from "../../contexts/CinemaContext";
import { CinemaCard } from "../../components/cards/CinemaCard.jsx";

export const ListCinemas = () => {
  const { country, province } = useCinema(); // Ambil state dari context
  const [filteredCinemas, setFilteredCinemas] = useState(cinemas);

  useEffect(() => {
    const filterCinema = () => {
      if (country !== "all" || province !== "all") {
        setFilteredCinemas(
          cinemas.filter((cinema) =>
            (country === "all" || cinema.country === country) &&
            (province === "all" || cinema.province === province)
          )
        );
      } else {
        setFilteredCinemas(cinemas);
      }
    };

    filterCinema();
    console.log(country)
    console.log(province)
  }, [country, province]); // Hilangkan `filteredCinemas` dari dependency array

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-6 lg:mt-8">
      {filteredCinemas.length > 0 ? (
        filteredCinemas.map((cinema) => (
          <CinemaCard
            key={cinema.id}
            address={cinema.address}
            closingTime={cinema.close_hours}
            country={cinema.country}
            name={cinema.name}
            openingTime={cinema.open_hours}
            picture={cinema.picture}
            province={cinema.province}
            studios={cinema.studio}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-2">No cinemas found</p>
      )}
    </div>
  );
};
