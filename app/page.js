import Image from "next/image";
import cinemaImg from "@/app/_assets/cinema.jpg"
import { DiscoverMovieForm } from "./components/DiscoverMovieForm";

export default function Home() {
  return (
    <>
      <section className="min-h-[60vh] flex flex-col gap-6 lg:gap-12 lg:items-center lg:justify-end py-8 ">
        <div className="-z-10 hidden lg:block">
          <Image src={cinemaImg} alt="hero" fill={true} className="max-h-[40vh] lg:max-h-[60vh] object-cover"/>
          <div className="min-h-[40vh] lg:min-h-[60vh] absolute top-0 left-0 right-0 bg-gradient-to-b from-dark-300/10  to-dark-300/60"></div>
        </div>
        <div className="self-start">
          <h1 className="text-3xl  lg:text-7xl font-semibold text-white lg:mb-3">
            Discover Movie
          </h1>
          <p className="text-sm lg:text-xl lg:text-white">Search Movie, Cinema, City....</p>
        </div>
        <div className="w-full">
          <DiscoverMovieForm/>
        </div>
      </section>
    </>
  );
}
