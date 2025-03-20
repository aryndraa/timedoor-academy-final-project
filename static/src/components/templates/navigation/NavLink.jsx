import {Link, useLocation} from "react-router-dom";

export const NavLink = ({ path, name, icon }) => {
  const { pathname } = useLocation();

  const isActive =
    path === "/"
      ? pathname === "/"
      : pathname.startsWith(path);

  return (
    <Link
      to={path}
      className={`text-[10px] lg:text-lg font-semibold lg:font-medium flex flex-col gap-1 items-center ${
        isActive ? "text-primary" : "text-white/40"
      }`}
    >
      <span className="lg:hidden text-2xl">{icon}</span>
      {name}
    </Link>
  );
};
