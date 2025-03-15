import {TabBar} from "../components/movies/TabBar.jsx";
import {MovieCard} from "../components/cards/MovieCard.jsx";
import {useEffect, useState} from "react";
import movie from "../api/movie.js";

export function UpcomingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await movie.upcomingMovie();
      if(data) {
        setMovies(data);
      }
    }

    fetchMovies()
  }, [])

  return (
    <>
      <section className="mx-3 lg:mx-20 mt-6 lg:mt-12 ">
        <TabBar/>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 gap-y-6 lg:gap-6 lg:gap-y-12 mt-8">
          {movies > 0 ?
            movies.map((movie) => (
              <MovieCard key={movie} age={movie.age_restriction} cover={movie.cover.file_url} duration={movie.duration} title={movie.title} />
            ))
            :
            "tidak ada film untuk saat ini"
          }
        </div>

      </section>
    </>
  )
}