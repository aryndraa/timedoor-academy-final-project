import { NavLink } from "./NavLink"

export const Navigation = () => {

  const links = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Movies",
      path: "/movies"
    },
    {
      name: "Cinema",
      path: "/cinemas"
    },
    {
      name: "My Ticket",
      path: "/my-tickets"
    },
  ]

  return (
    <nav className="py-6 border-y border-dark-100 px-3 lg:px-20">
      <ul className="flex gap-4">
        {links.map((link, key) => (
          <li key={key}>
            <NavLink name={link.name} path={link.path}/>
          </li>
        ))}
      </ul>
    </nav>
  )
}