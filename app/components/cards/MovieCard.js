import { FaRegClock } from "react-icons/fa";

export const MovieCard = () => {
  return (
    <div>
      <div className="relative mb-3 ">
        <img
          src="https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"
          className="rounded-lg h-[218px] lg:h-[352px] w-full object-cover"
        />
        {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-dark-300/0 via-dark-300/0 to-dark-300"></div> */}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-sm lg:text-lg font-medium text-center gap-2">Ruroinin Kenshin 2: Kyoto Inferno</h3>
        <div className="flex gap-3 items-center">
          <p className="text-xs lg:text-base flex gap-2 items-center">
            <span><FaRegClock/></span>
            1h  18m
          </p>
          <span className="text-xs lg:text-base bg-dark-100 p-[3px] rounded-lg">13+</span>
        </div>
      </div>
    </div>
  )
}
