"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({path, name}) => {
  const pathname = usePathname() 
  return (
    <Link href={path} className={` font-medium ${
      pathname === path ? "text-primary" : "text-text-100"
    }`}>
      {name}
    </Link>
  );
}