import Link from "next/link";
import { FaRegClock } from "react-icons/fa6";

export const CinemaCard = () => {
  return (
    <Link href={"/movies/1/booking/reservation"} className="p-4 lg:p-6 bg-dark-250 rounded-lg">
      <div className="mb-4">
        <h3 className="font-semibold lg:text-lg mb-1">Lippo Mall  Kuta</h3>
        <p className="text-xs text-text-400 lg:hidden">Jalan Kartika Plaza Lingkar Segara, Kuta, Bali.....</p>
        <p className="text-xs lg:text-base text-text-400 hidden lg:block">Jalan Kartika Plaza Lingkar Segara, Kuta, Bali</p>
      </div>
       <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 lg:text-lg">
          <FaRegClock/>
          <span className="text-sm lg:text-base">12.00 - 21.00</span>
        </div>
        <span className="font-semibold text-sm lg:text-base">REGULER | VIP | IMAX</span>
      </div>
    </Link>
  )
}
