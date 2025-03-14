import { FaMapLocationDot, FaLocationDot, FaClock   } from "react-icons/fa6";

export const CinemaCard = () => {
  return (
    <div className="flex  gap-6 p-6 border border-border/20 bg-dark-250 hover:bg-dark-200 transition ease-in-out ">
      <img
        src="https://fifthperson.com/wp-content/uploads/2018/05/lippo-kuta.jpg"
        alt=""
        className="w-[200px] h-[200px] object-cover "
      />
      <div className="w-full   ">
        <h2 className="text-xl font-medium pb-4  mb-4 border-b">Lippo Mall Bali Kuta</h2>
         <div className="flex flex-col gap-8   justify-between">
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-text-400" >
              <FaMapLocationDot/>
              Jln. Ngawi Selatan No. 12
            </p>
            <p className="flex items-center gap-2 text-text-400" >
              <FaLocationDot/>
              Indonesia / Bali
            </p>
            <p className="flex items-center gap-2 text-text-400" >
              <FaClock/>
              09:00 - 20:00
            </p>
          </div>
          <div className="self-end flex gap-3">
            <span>REGULER</span>
            <span>IMAX</span>
            <span>VIP</span>
          </div>
        </div>
      </div>
    </div>
  )
}