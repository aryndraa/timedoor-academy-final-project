import {Link} from "react-router-dom";
import {IoArrowBack} from "react-icons/io5";

export const BackBar = ({id, cover, title}) => {
  return (
    <div>
      <Link to={`/movies/${id}`} className="absolute left-0 right-0 top-0 gap-2 lg:gap-4  p-4 lg:px-16 lg:py-8 py-4  flex items-center bg-dark-300 text-white  w-full z-[9999] ">
        <span className="text-3xl">
          <IoArrowBack/>
        </span>
        <div className=" flex gap-2 lg:gap-4 items-center">
          <img
            src={cover}
            className='w-10 lg:w-12 h-10 lg:h-12 object-cover rounded-full'
          />
          <div>
            <span className='text-sm lg:text-base text-text-400'>Book Movie</span>
            <h3 className='text-white font-semibold lg:font-medium text-sm lg:text-lg'>{title}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}