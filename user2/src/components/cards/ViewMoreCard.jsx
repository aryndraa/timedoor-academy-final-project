import { CiCircleMore } from "react-icons/ci";
import {Link} from "react-router-dom";

export const ViewMoreCard = ({link}) => {
  return (
    <Link to={link} className="lg:w-full bg-dark-250 min-w-[152px]  h-[218px] lg:h-[352px] rounded-lg flex flex-col items-center justify-center gap-4">
      <span className="text-6xl lg:text-7xl">
        <CiCircleMore/>
      </span>
      <p className="text-base lg:text-lg">See More Movies</p>
    </Link>
  )
}

