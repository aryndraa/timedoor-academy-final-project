import {TabBar} from "../../components/movies/TabBar.jsx";
import {MovieCard} from "../../components/cards/MovieCard.jsx";

export function Movies() {

  return (
    <>
      <section className="mx-3 lg:mx-20 mt-6 lg:mt-12">
        <TabBar/>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 gap-y-6 lg:gap-6 lg:gap-y-12 mt-8">
          <MovieCard/>
        </div>
      </section>
    </>
  )
}