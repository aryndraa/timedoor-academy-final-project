import { FaRegClock } from "react-icons/fa6";

export const CinemaCard = () => {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1596445836561-991bcd39a86d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img"
        className="w-full h-[320px] object-cover rounded-lg mb-4"
      />
      <div className="flex flex-col gap-4 px-4 py-4 absolute -bottom-5  shadow-lg bg-dark-300 rounded-lg mx-2">
        <div >
          <h3 className="text-xl font-semibold mb-1">Lippo Mall  Kuta</h3>
          <p className="text-sm">Jalan Kartika Plaza Lingkar Segara, Kuta, Bali.....</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaRegClock/>
            <span className="text-sm">12.00 - 21.00</span>
          </div>
          <span className="font-semibold text-sm">REGULER | VIP | IMAX</span>
        </div>
      </div>
    </div>
  )
}
