import Image from "next/image";
import cinemaImg from "@/app/_assets/cinema.jpg"
import { DiscoverMovieForm } from "./components/DiscoverMovieForm";

export default function Home() {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col gap-6 lg:items-center lg:justify-center py-8 ">
        <div className="lg:text-center">
          <h1 className="text-3xl   lg:text-7xl font-semibold text-white lg:mb-4">
            Discover Movie
          </h1>
          <p className="text-sm lg:text-lg">Search Movie, Cinema, City....</p>
        </div>
        <div>
          <DiscoverMovieForm/>
        </div>
      </section>
    </>
  );
}
