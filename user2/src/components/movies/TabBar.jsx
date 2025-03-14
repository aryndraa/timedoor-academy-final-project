import {Link, useLocation} from "react-router-dom";

export const TabBar = () => {
  const {pathname} = useLocation();

  return (
    <div className="flex gap-4 lg:gap-6 text-text-400 text-base lg:text-lg font-medium">
      <Link to="/movies" className={`border-b  pb-3 ${
        pathname === "/movies" ? "text-primary border-primary" : "border-border/40"
      }`}>Playing Now</Link>

      <Link to="/movies/upcoming" className={`border-b  pb-3 ${
        pathname === "/movies/upcoming" ? "text-primary border-primary" : " border-border/40"
      }`}>Upcoming Movies</Link>
    </div>
  )
}