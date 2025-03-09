import {Link} from "react-router-dom";
import { FaPlay } from "react-icons/fa";

export const CarouselItem = () => {
  return (
    <div className="max-h-[65vh] flex ">
      <div className="flex-1 pl-20 max-w-lg bg-gradient-to-r from-dark-300 to-dark-300/0 flex-col flex justify-center ">
        <div className="mb-6">
          <h1 className="text-3xl leading-[1.5] font-semibold mb-2 text-white">Captain America: Brave New World</h1>
          <div className="text-text-200/80 mb-2">
            <span>Action</span> • 118
          </div>
          <p className="font-light">Setelah bertemu dengan Presiden AS yang baru terpilih, Thaddeus Ross (Harrison Ford), Sam Wilson (Anthony Mackie), Captain America yang....</p>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/movies/:id" className="flex px-4 py-3 gap-4 items-center border border-primary rounded-lg font-semibold text-dark-300 bg-primary">Book Now</Link>
          <Link to="/movies/:id" className="flex px-4 py-3 gap-4 items-center border border-primary rounded-lg font-semibold text-primary"><FaPlay/> Watch Trailer</Link>
        </div>
      </div>
      <div className="relative flex-1 ">
        <div className="absolute bg-gradient-to-r from-dark-300 via-dark-300/0 to-transparent inset-0"></div>
        <img
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/sharedimages/2024/12/captain-america-brave-new-world-poster.jpg"
          alt="a"
          className="h-[65vh] object-cover w-full"
        />
      </div>
    </div>
  )
}