import { FaRegClock } from "react-icons/fa";
import {Link} from "react-router-dom";

export const MovieCard = ({duration, cover, age, title, id}) => {
  return (
    <Link to={`/movies/${id}`} >
      <div className="relative mb-3 ">
        <img
          src={cover ?? "https://i.pinimg.com/736x/de/9a/e7/de9ae780aae37dbf947a56ad63ffd956.jpg"}
          className="rounded-lg w-full min-w-[152px] h-[225px] lg:h-[352px] lg:w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-sm lg:text-lg font-medium capitalize text-center gap-2">{title ?? "Ruroini Kenshin : Origin"}</h3>
        <div className="flex gap-3 items-center">
          <p className="text-xs lg:text-base flex gap-2 items-center">
            <span><FaRegClock/></span>
            {duration ?? "60"} Minutes
          </p>
          <span className="text-xs lg:text-base bg-dark-100 p-[3px] lg:px-2 rounded-lg">{age ?? "13"}</span>
        </div>
      </div>
    </Link>
  )
}
