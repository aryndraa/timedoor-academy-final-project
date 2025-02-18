import { NavLink } from "./NavLink"

export const Navigation = () => {

  const links = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "My Ticket",
      path: "/my-tickets"
    },
    {
      name: "Movies",
      path: "/movies"
    },
    {
      name: "Cinema",
      path: "/cinemas"
    },
    
  ]

  return (
    <nav >
      <ul className="flex gap-8">
        {links.map((link, key) => (
          <li key={key}>
            <NavLink name={link.name} path={link.path}/>
          </li>
        ))}
      </ul>
    </nav>
  )
}