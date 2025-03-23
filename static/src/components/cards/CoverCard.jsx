import { Link } from "react-router-dom"

export const CoverCard = ({picture, name}) => {
  return (
    <Link to={`movies/${name}`}>
      <div className="relative mb-3 ">
        <img
          src={picture}
          className="rounded-lg min-w-[162px] h-[225px] lg:h-[320px] lg:w-full object-cover"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-dark-300/20 via-dark-300/0 to-dark-300/20"></div>
      </div>
    </Link>
  )
}
