import { FaRegClock } from "react-icons/fa6";

export const CinemaCard = () => {
  return (
    <div className="p-4 bg-dark-250">
      <div className="mb-4">
        <h3 className="font-semibold mb-1">Lippo Mall  Kuta</h3>
        <p className="text-xs text-text-400">Jalan Kartika Plaza Lingkar Segara, Kuta, Bali.....</p>
      </div>
       <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaRegClock/>
          <span className="text-sm">12.00 - 21.00</span>
        </div>
        <span className="font-semibold text-sm">REGULER | VIP | IMAX</span>
      </div>
    </div>
  )
}
