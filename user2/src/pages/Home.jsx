import {CarouselItem} from "../components/home/CarouselItem.jsx";
import {Carousel} from "../components/home/Carousel.jsx";
import {SectionTitle} from "../components/SectionTitle.jsx";
import {CoverCard} from "../components/cards/CoverCard.jsx";
import {MovieCard} from "../components/cards/MovieCard.jsx";
import {ViewMoreCard} from "../components/cards/ViewMoreCard.jsx";

export function Home() {
  return (
    <>
      <section className="mb-12 ">
        <Carousel/>
      </section>
      <section className="mb-12 mx-20 pb-12  border-b border-border/40">
        <SectionTitle title="most watched movies" />
        <div className="grid grid-cols-5 gap-6 mt-6">
          <CoverCard/>
          <CoverCard/>
          <CoverCard/>
          <CoverCard/>
          <CoverCard/>
        </div>
      </section>
      <section className="mb-12 mx-20 pb-12 border-b border-border/40">
        <SectionTitle title="Now Playing" />
        <div className="grid grid-cols-5 gap-6 gap-y-12 mt-6">
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <ViewMoreCard/>
        </div>
      </section>
      <section>

      </section>
    </>
  )
}