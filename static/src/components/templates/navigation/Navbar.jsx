import { NavLink } from "./NavLink"
import { GoHomeFill } from "react-icons/go";
import { MdMovieFilter } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { RiVideoAiFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

export const Navbar = () => {

  const links = [
    {
      name: "Home",
      path: "/",
      icon: <GoHomeFill />,
    },
    {
      name: "My Ticket",
      path: "/my-tickets",
      icon: <FaTicketAlt />,
    },
    {
      name: "Movies",
      path: "/movies",
      icon: <MdMovieFilter />,
    },
    {
      name: "Cinema",
      path: "/cinemas",
      icon: <RiVideoAiFill />,
    },

  ]

  return (
    <nav >
      <ul className="flex lg:gap-8 justify-between items-center">
        {links.map((link, key) => (
          <li key={key}>
            <NavLink name={link.name} path={link.path} icon={link.icon}/>
          </li>
        ))}
        <li className="lg:hidden">
          <NavLink name={"Profile"} path={"/profile"} icon={<FaUser />}/>
        </li>
      </ul>
    </nav>
  )
}