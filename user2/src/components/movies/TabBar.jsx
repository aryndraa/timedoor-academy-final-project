import {Link, useLocation} from "react-router-dom";

export const TabBar = () => {
  const {pathname} = useLocation();

  return (
    <div className="flex gap-6 text-text-400 text-lg font-medium">
      <Link to="/movies" className={`${
        pathname === "/movies" ? "text-primary" : ""
      }`}>Playing Now</Link>

      <Link to="/movies/upcoming" className={`${
        pathname === "/movies/upcoming" ? "text-primary" : ""
      }`}>Upcoming Movies</Link>
    </div>
  )
}