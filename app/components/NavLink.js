"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ path, name, icon }) => {
  const pathname = usePathname();

  const isActive =
    path === "/"
      ? pathname === "/" 
      : pathname.startsWith(path); 
  return (
    <Link
      href={path}
      className={`text-[10px] lg:text-lg font-semibold lg:font-medium flex flex-col gap-1 items-center ${
        isActive ? "text-primary" : "text-white/40"
      }`}
    >
      <span className="lg:hidden text-2xl">{icon}</span>
      {name}
    </Link>
  );
};
