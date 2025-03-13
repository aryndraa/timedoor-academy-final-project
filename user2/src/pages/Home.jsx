import {CarouselItem} from "../components/home/CarouselItem.jsx";
import {Carousel} from "../components/home/Carousel.jsx";
import {SectionTitle} from "../components/SectionTitle.jsx";
import {CoverCard} from "../components/cards/CoverCard.jsx";
import {MovieCard} from "../components/cards/MovieCard.jsx";
import {ViewMoreCard} from "../components/cards/ViewMoreCard.jsx";
import {Link} from "react-router-dom";

export function Home() {
  return (
    <>
      <section className="mb-6 lg:mb-12 ">
        <Carousel/>
      </section>
      <section className="mb-4 lg:mb-12 mx-3 lg:mx-20 lg:pb-12  lg:border-b border-border/40">
        <SectionTitle title="most watched movies"/>
        <div className="flex overflow-scroll lg:grid grid-cols-5 gap-2 lg:gap-6 mt-4 lg:mt-6">
          <CoverCard/>
          <CoverCard/>
          <CoverCard/>
          <CoverCard/>
          <CoverCard/>
        </div>
      </section>
      <section className="mb-6 lg:mb-12 mx-3 lg:mx-20  lg:pb-12 lg:border-b border-border/40">
        <div className="flex justify-between items-center">
          <SectionTitle title="Now Playings"/>
          <Link to="/movies" className="text-primary lg:hidden">See more</Link>
        </div>
        <div className="flex overflow-scroll lg:grid grid-cols-5 gap-2 lg:gap-6 gap-y-6 lg:gap-y-12 mt-4 lg:mt-6">
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <ViewMoreCard link={"/movies/"}/>
        </div>
      </section>
      <section className="mb-6 lg:mb-12 mx-3 lg:mx-20 pb-12">
        <div className="flex justify-between items-center ">
          <SectionTitle title="Upcoming Movies"/>
          <Link to="/movies" className="text-primary lg:hidden">See more</Link>
        </div>
        <div className="flex overflow-scroll lg:grid grid-cols-5 gap-2 lg:gap-6 gap-y-12 mt-4 lg:mt-6">
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <ViewMoreCard link={"/movies/upcoming"}/>
        </div>
      </section>
    </>
  )
}