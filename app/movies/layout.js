"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {

  const pathname = usePathname();

  return (
    <>
     <section className="min-h-[60vh] flex flex-col  py-8 lg:mx-16 pb-12 lg:pb-24">
       <div className="flex justify-center gap-6">
         <Link href={"/movies"}  className={`font-medium text-lg border-b-2  pb-4  ${
          pathname === "/movies" ? "border-primary text-primary" : "border-transparent"
         }`}>Playing Now</Link>
         <Link href={"/movies/upcoming"} className={`font-medium text-lg border-b -2  pb-4 ${
          pathname === "/movies/upcoming" ? "border-primary text-primary" : "border-transparent"
         }`}>Upcoming Movies</Link>
       </div>
     </section>
    </>
  )
}