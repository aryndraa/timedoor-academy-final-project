import Link from "next/link";
import { HomeCinemaCard } from "./cards/HomeCinemaCard";

export const PopularCinema = () => {
  return (
    <div  className="flex flex-col items-center">
      <div className="grid lg:grid-cols-3 gap-10 lg:gap-6 mt-6 mb-16">
        <HomeCinemaCard/>          
        <HomeCinemaCard/>          
        <HomeCinemaCard/>          
      </div>
      <Link href={'/cinema'} className="text-primary font-medium rounded-lg text-lg">See More</Link>
    </div>
  )
}
