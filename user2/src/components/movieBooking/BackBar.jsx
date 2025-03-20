import {Link} from "react-router-dom";
import {IoArrowBack} from "react-icons/io5";

export const BackBar = () => {
  return (
    <div>
      <Link to={"/movie"}
            className="absolute left-0 right-0 top-0 gap-2 lg:gap-4  p-4 lg:px-16 lg:py-8 py-4  flex items-center bg-dark-300 text-white  w-full z-[9999] ">
        <span className="text-3xl">
          <IoArrowBack/>
        </span>
        <div className=" flex gap-2 lg:gap-4 items-center">
          <img
            src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"
            className='w-10 lg:w-12 h-10 lg:h-12 object-cover rounded-full'
          />
          <div>
            <span className='text-sm lg:text-base text-text-400'>Book Movie</span>
            <h3 className='text-white font-semibold lg:font-medium text-sm lg:text-lg'>Ruroinin Kenshin</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}