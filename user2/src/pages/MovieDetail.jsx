import {Link} from "react-router-dom";
import {IoArrowBack} from "react-icons/io5";
import {MovieInfo} from "../components/movieDetail/MovieInfo.jsx";
import {MovieSynopsis} from "../components/movieDetail/MovieSynopsis.jsx";
import {MovieCasters} from "../components/movieDetail/MovieCasters.jsx";
import {BottomBook} from "../components/movieDetail/BottomBook.jsx";

export function MovieDetail() {
  return (
    <>
      <section className='mx-3 lg:mx-20'>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="lg:hidden">
            <Link to={"/movies"}
                  className="absolute left-0 right-0 top-0  text-3xl p-4 py-8  flex bg-dark-300 text-white  w-full ">
              <IoArrowBack/>
            </Link>
          </div>
          <div className="relative z-10">
            <div className="flex flex-col mt-4">
              <div className="flex flex-col items-center mb-4">
                <img src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"
                     alt="cover"
                     className="w-[60%] h-[260px] object-cover rounded-lg mb-4"
                />
                <h1 className="text-xl mb-1 font-semibold">Ruroini Kenshin</h1>
                <h2 className="text-text-400">Action</h2>
              </div>
              <div className="grid grid-cols-3 border-y py-4 relative mb-6  border-border/20">
                <MovieInfo info={"SU"} infoDetail={"Semua Usia"}/>
                <MovieInfo info={"140"} infoDetail={"Minute"}/>
                <MovieInfo info={"ID"} infoDetail={"Indonesia"}/>
              </div>
              <div className="mb-6">
                <MovieSynopsis/>
              </div>
              <div className="">
                <MovieCasters/>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop View */}
        <div className="mt-12 gap-12 hidden lg:flex ">
          <div className="flex flex-col items-start mb-4 w-[22%] ">
            <img src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"
                 alt="cover"
                 className="w-full h-[320px] object-cover mb-4 rounded-lg"
            />
            <div className="flex flex-col gap-4 w-full">
              <Link to={"/movies/1/booking"}
                    className="p-3 border rounded-lg bg-primary text-dark-300 font-semibold text-center border-primary w-full">Book
                Now</Link>
              <Link to={"/"}
                    className="p-3 border rounded-lg border-primary w-full text-primary font-medium  text-center">Watch
                Trailer </Link>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="mb-8">
              <h2 className="text-3xl mb-1 font-semibold">Ruroinin Kenshin</h2>
              <p className="text-text-400 text-lg">Action</p>
            </div>
            <div className="flex justify-between border-y py-4 px-6 relative mb-8  border-border/20">
              <MovieInfo info={"SU"} infoDetail={"Semua Usia"}/>
              <MovieInfo info={"140"} infoDetail={"Minute"}/>
              <MovieInfo info={"ID"} infoDetail={"Indonesia"}/>
            </div>
            <div className="mb-8">
              <MovieSynopsis/>
            </div>
            <div className="">
              <MovieCasters/>
            </div>
          </div>
        </div>

        <BottomBook/>
      </section>
    </>
  )
}