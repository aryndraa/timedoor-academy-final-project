"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";

export default function RootLayout({ children }) {

  const pathname = usePathname();

  return (
    <>
     <section className="min-h-[60vh] flex flex-col  py-8 lg:mx-16 pb-12 lg:pb-24">
       <div className=" mb-8 lg:mb-12 flex flex-col gap-10">
       <div className="rounded-full p-3 px-4 pl-6 bg-dark-200  w-full flex justify-between items-center" >
          <input type="text" className=" max-w-[80%] focus:outline-none bg-transparent  placeholder:text-text-200" placeholder="Search Movie..."/>
          <Link href={"/"} className="text-2xl p-2 rounded-full bg-dark-100">
            <IoSearch/>
          </Link>
        </div>
        <div className="flex  gap-4 lg:gap-6">
          <Link  href={"/movies"}  className={`font-medium lg:text-lg  border-b-2  pb-3  ${
              pathname === "/movies" ? "border-primary text-primary" : "border-transparent"
             }`}>Playng Now</Link>
          <Link  href={"/movies/upcoming"} className={`font-medium lg:text-lg  border-b-2  pb-3 ${
              pathname === "/movies/upcoming" ? "border-primary text-primary" : "border-transparent"
             }`}>Upcoming Movies</Link>
          </div>
          
       </div>
       <div>
        {children}
       </div>
     </section>
    </>
  )
}