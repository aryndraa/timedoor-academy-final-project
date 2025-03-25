import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { MovieInfo } from "../../components/movieDetail/MovieInfo.jsx";
import { MovieSynopsis } from "../../components/movieDetail/MovieSynopsis.jsx";
import { MovieCasters } from "../../components/movieDetail/MovieCasters.jsx";
import { BottomBook } from "../../components/movieDetail/BottomBook.jsx";
import movies from "./../../data/movies.json";
import { FaPlay, FaTimes } from "react-icons/fa";
import ReactPlayer from "react-player";


export function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  // State untuk modal trailer
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <>
      <section className="mx-3 lg:mx-20">
        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="">
            <img
              src={movie.cover}
              alt=""
              className="absolute top-0 z-10 h-[40vh] object-cover left-0 w-full"
            />
            <div className="absolute min-h-[41vh] w-full left-0 right-0 top-0 z-20 bg-gradient-to-b from-dark-300/50 via-dark-300/30 to-dark-300"></div>
          </div>
          <div className="lg:hidden">
            <Link
              to={"/movies"}
              className="absolute left-0 right-0 top-0 text-3xl p-4 py-8 flex text-white w-full z-50"
            >
              <IoArrowBack />
            </Link>
          </div>
          <div className="relative z-50">
            <div className="flex flex-col mt-4">
              <div className="flex flex-col items-center mb-4">
                <div className="w-[60%] h-[260px] mb-4 flex  justify-end items-end relative">
                  <button 
                    className="bg-primary text-white p-4 rounded-full h-fit transform translate-x-2 translate-y-2"
                    onClick={() => setShowTrailer(true)}
                  >
                    <FaPlay/>
                  </button>
                  <img
                    src={movie.cover}
                    alt="cover"
                    className=" w-full h-full absolute inset-0 z-[-1] object-cover rounded-lg mb-4"
                  />
                  </div>
                <h1 className="text-xl mb-1 font-semibold uppercase text-center">
                  {movie.title}
                </h1>
                <h2 className="text-text-400 capitalize">{movie.genre}</h2>
              </div>
              <div className="grid grid-cols-3 border-y py-4 relative mb-6 border-border/20">
                <MovieInfo info={movie.age_restriction} infoDetail={"Age Rating"} />
                <MovieInfo info={movie.duration} infoDetail={"Minute"} />
                <MovieInfo info={movie.language.slice(0, 3)} infoDetail={movie.language} />
              </div>
              <div className="mb-6">
                <MovieSynopsis synopsis={movie.synopsis} />
              </div>
              <div className="">
                <MovieCasters casters={movie.casters} />
              </div>
            </div>
          </div>
        </div>

        {/* Laptop View */}
        <div className="mt-12 gap-12 hidden lg:flex ">
          <div className="flex flex-col items-start mb-4 w-[22%] ">
            <img
              src={movie.cover}
              alt="cover"
              className="w-full h-[360px] object-cover mb-4 rounded-lg"
            />
            <div className="flex flex-col gap-4 w-full">
              <Link
                to={`/movies/${id}/booking`}
                className={`p-3 border rounded-lg bg-primary text-dark-300 font-semibold text-center border-primary w-full ${
                  !movie.playing_now ? "hidden" : ""
                }`}
              >
                Book Now
              </Link>
              <button
                onClick={() => setShowTrailer(true)}
                className="p-3 border rounded-lg border-primary w-full text-primary font-medium text-center"
              >
                Watch Trailer
              </button>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="mb-8">
              <h2 className="text-3xl mb-1 font-semibold">{movie.title}</h2>
              <p className="text-text-400 text-lg capitalize">{movie.genre}</p>
            </div>
            <div className="flex justify-between border-y py-4 px-6 relative mb-8 border-border/20">
              <MovieInfo info={movie.age_restriction} infoDetail={"Age Rating"} />
              <MovieInfo info={movie.duration} infoDetail={"Minute"} />
              <MovieInfo info={movie.language.slice(0, 3)} infoDetail={movie.language} />
            </div>
            <div className="mb-8">
              <MovieSynopsis synopsis={movie.synopsis} />
            </div>
            <div className="">
              <MovieCasters casters={movie.casters} />
            </div>
          </div>
        </div>
        <BottomBook  id={movie.id}/>

        {/* Modal Trailer */}
        {showTrailer && (
          <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-70 z-[999]">
            <div className="relative bg-dark-300 p-4 rounded-lg max-w-3xl mx-4 lg:mx-0 w-full">
              <button onClick={() => setShowTrailer(false)} className="absolute top-3 right-3 text-white text-2xl">
                <FaTimes />
              </button>
              <ReactPlayer url={movie.trailer_url} controls width="100%" height="400px" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
