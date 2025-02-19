import Image from "next/image";
import cinemaImg from "@/app/_assets/cinema.jpg"

export default function Home() {
  return (
    <>
      <section className="min-h-[80vh] flex items-center justify-center ">
        <div className="text-center">
          <h1 className="text-7xl font-semibold text-white mb-4">
            Discover Movie
          </h1>
          <p className="text-lg">Search Movie, Cinema, City....</p>
        </div>
      </section>
    </>
  );
}
