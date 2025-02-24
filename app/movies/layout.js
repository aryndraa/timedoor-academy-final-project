"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {

  const pathname = usePathname();

  return (
    <>
     <section className="min-h-[60vh] flex flex-col  py-8 lg:mx-16 pb-12 lg:pb-24">
       <div className="flex lg:justify-center gap-4 lg:gap-6 mb-8 lg:mb-14">
         <Link href={"/movies"}  className={`font-medium lg:text-lg  border-b-2  pb-3  ${
          pathname === "/movies" ? "border-primary text-primary" : "border-transparent"
         }`}>Playing Now</Link>
         <Link href={"/movies/upcoming"} className={`font-medium lg:text-lg  border-b-2  pb-3 ${
          pathname === "/movies/upcoming" ? "border-primary text-primary" : "border-transparent"
         }`}>Upcoming Movies</Link>
       </div>

       <div>
        {children}
       </div>
     </section>
    </>
  )
}