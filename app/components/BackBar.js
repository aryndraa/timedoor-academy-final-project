import Link from "next/link"
import { IoArrowBack } from "react-icons/io5";

export const BackBar = () => {
  return (
    <div>
      <Link href={"/movies"} className="fixed left-0 right-0 top-0 gap-4  p-4 py-4  flex items-center bg-dark-300 text-white  w-full ">
        <span className="text-3xl">
          <IoArrowBack/>
        </span>
        <div className=" flex  gap-2 items-center">
          <img 
            src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"
            className='w-10 h-10 object-cover rounded-full'
          />
          <div>
            <span className='text-sm text-text-400'>Book Movie</span>
            <h3 className='text-white font-semibold text-sm'>Ruroinin Kenshin</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}
