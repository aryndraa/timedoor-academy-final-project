"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";

export default function RootLayout({ children }) {

  const pathname = usePathname();

  return (
    <>
    {
      pathname === '/movie' || pathname === "/movie/upcoming" ?
      (
        <section className="min-h-[60vh] flex flex-col  py-8 lg:mx-16 pb-12 lg:pb-24">
          <div className=" mb-8 lg:mb-12 flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center gap-6">
          <div className="rounded-lg p-3 px-4 pl-6 bg-dark-200  w-full lg:max-w-[30%] flex justify-between items-center" >
             <input type="text" className=" max-w-[80%] focus:outline-none bg-transparent  placeholder:text-text-200" placeholder="Search Movie..."/>
             <Link href={"/"} className="text-2xl  p-2 rounded-full bg-dark-100">
               <IoSearch/>
             </Link>
           </div> 
           <div className="flex  gap-4 lg:gap-6">
             <Link  href={"/movie"}  className={`font-medium lg:text-lg  border-b-2  pb-3 lg:pb-4  ${
                 pathname === "/movie" ? "border-primary text-primary" : "border-transparent"
                }`}>Playing Now</Link>
             <Link  href={"/movie/upcoming"} className={`font-medium lg:text-lg  border-b-2  pb-3 lg:pb-4 ${
                 pathname === "/movie/upcoming" ? "border-primary text-primary" : "border-transparent"
                }`}>Upcoming Movies</Link>
             </div>
              
          </div>
          <div>
           {children}
          </div>
        </section>
      ) 
      :
      (
        <div>{children}</div>
      )
    
    }
     
    </>
  )
}