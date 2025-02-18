import Link from "next/link";

export const NavLink = ({path, name}) => {
  return (
    <Link href={path} className={`text-text-100`}>
      {name}
    </Link>
  );
}