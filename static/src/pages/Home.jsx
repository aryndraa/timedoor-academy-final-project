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
        <div className="flex overflow-scroll lg:overflow-hidden lg:grid grid-cols-5 gap-2 lg:gap-6 mt-4 lg:mt-8">
          <CoverCard 
            name={"Captain America: Brave New World"}
            picture={"https://i.pinimg.com/736x/7d/b4/7a/7db47a4f2af662065b63d40b99128a9a.jpg"}  
          />
          <CoverCard
            name={"Flight Risk"}
            picture={"https://i.pinimg.com/736x/2d/6e/1e/2d6e1eaf39c6a5cee3dc40baf4e1f012.jpg"}
          />
          <CoverCard
            name={"Wolf Man"}
            picture={"https://i.pinimg.com/736x/3e/20/42/3e20429aa08fad79944e8b3cfe149562.jpg"}
          />
          <CoverCard
            name={"1 Kakak 7 Ponakan"}
            picture={"https://i.pinimg.com/736x/8a/fb/92/8afb92084ccb3869d39e8432e32de54c.jpg"}
          />
          <CoverCard
            name={"Perayaan Mati Rasa"}
            picture={"https://i.pinimg.com/736x/0e/84/6a/0e846a0089aaa97555ee4d7b1eee5af0.jpg"}
          />
        </div>
      </section>
      <section className="mb-6 lg:mb-12 mx-3 lg:mx-20  lg:pb-12 lg:border-b border-border/40">
        <div className="flex justify-between items-center">
          <SectionTitle title="Now Playings"/>
          <Link to="/movie/Movies" className="text-primary lg:hidden">See more</Link>
        </div>
        <div className="flex overflow-scroll lg:overflow-hidden lg:grid grid-cols-5 gap-2 lg:gap-6 gap-y-6 lg:gap-y-12 mt-4 lg:mt-8">
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <ViewMoreCard link={"/movie/"}/>
        </div>
      </section>
      <section className="mb-6 lg:mb-12 mx-3 lg:mx-20 pb-12">
        <div className="flex justify-between items-center ">
          <SectionTitle title="Upcoming Movies"/>
          <Link to="/movie/Movies" className="text-primary lg:hidden">See more</Link>
        </div>
        <div className="flex overflow-scroll lg:overflow-hidden lg:grid grid-cols-5 gap-2 lg:gap-6 gap-y-12 mt-4 lg:mt-8">
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <ViewMoreCard link={"/movie/upcoming"}/>
        </div>
      </section>
    </>
  )
}