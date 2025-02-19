"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({path, name, icon}) => {
  const pathname = usePathname() 
  return (
    <Link href={path} className={` text-[10px] lg:text-lg font-semibold lg:font-medium flex flex-col gap-1 items-center ${
      pathname === path ? "text-primary" : "text-white/40"
    }`}>
      <span className="lg:hidden text-2xl">{icon}</span>
      {name}
    </Link>
  );
}