import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaTimes } from "react-icons/fa";
import ReactPlayer from "react-player";

export const CarouselItem = ({ cover, title, genre, synopsis, duration, trailerUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-h-[60vh] flex">
      <div className="hidden lg:flex flex-1 pl-20 max-w-[28rem] bg-gradient-to-r from-dark-300 to-dark-300/0 flex-col justify-center">
        <div className="mb-6 min-w-[29rem] z-10">
          <h1 className="text-3xl leading-[1.5] font-semibold mb-2 text-white">{title}</h1>
          <div className="text-text-200/80 mb-2">
            <span className="capitalize">{genre}</span> • {duration}
          </div>
          <p className="text-text-200">{synopsis}</p>
        </div>
        <div className="flex items-center gap-2">
          <Link to={`/movies/${title}`} className="flex px-4 py-3 gap-4 items-center border border-primary rounded-lg font-semibold text-dark-300 bg-primary">
            Book Now
          </Link>
          <button onClick={() => setIsOpen(true)} className="flex px-4 py-3 gap-4 items-center border border-primary rounded-lg font-semibold text-primary">
            <FaPlay /> Watch Trailer
          </button>
        </div>
      </div>
      <div className="relative flex-1 h-[28vh] lg:h-[70vh]">
        <div className="absolute bg-gradient-to-r from-dark-300 via-dark-300/0 to-transparent inset-0"></div>
        <img src={cover} alt={title} className="object-cover h-full w-full" />
      </div>

      {/* Modal Trailer */}
      {isOpen && (
        <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative bg-dark-300 p-4 rounded-lg max-w-3xl w-full">
            <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-white text-2xl">
              <FaTimes />
            </button>
            <ReactPlayer url={trailerUrl} controls width="100%" height="360px" />
          </div>
        </div>
      )}
    </div>
  );
};
