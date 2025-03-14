import {TabBar} from "../components/movies/TabBar.jsx";
import {MovieCard} from "../components/cards/MovieCard.jsx";

export function UpcomingMovies() {
  return (
    <>
      <section className="mx-20 mt-12">
        <TabBar/>
        <div className="grid grid-cols-5 gap-6 gap-y-12 mt-8">
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
        </div>

      </section>
    </>
  )
}